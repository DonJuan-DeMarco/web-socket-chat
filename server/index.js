import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';
import http from 'http';
import mongoose from 'mongoose';
import onSendMessageHandler from './listeners/onSendMessageHandler';
import onGetChatHandler from './listeners/onGetChatHandler';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth-routes';
import CheckAuthToken from './middleware/useCheckAuthToken';
import onUserRestrict from './listeners/admin/onUserRestrict';
import CheckIfBanned from './middleware/useCheckIfBanned';
import KillAncient from './middleware/useKillAncient';
import SetSocketAdmin from './middleware/useSetSocketAdmin';
import onReturnUserInfo from './listeners/onReturnUserInfo';
import IsAdmin from './constants/isAdmin';
import onUserConnect from './listeners/onUserConnect';
import SetSocketUser from './middleware/useSetSocketUser';

const app = express();

app.use(cors());
app.use(bodyParser.json({}));
app.use('/api/auth', authRoutes);

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'HEAD'],
	},
});

let onlineUsers = {};

const onConnection = async (socket) => {
	console.log(`User connected: ${socket.id} | ${socket.admin}`);

	onReturnUserInfo(io, socket);
	onUserConnect(io, socket, onlineUsers);
	onSendMessageHandler(io, socket);
	onGetChatHandler(io, socket);

	if (await IsAdmin(socket.decoded.id)) {
		onUserRestrict(io, socket, onlineUsers);
	}
};

io.use((socket, next) => CheckAuthToken(socket, next))
	.use((socket, next) => CheckIfBanned(socket, next))
	.use((socket, next) => {
		let userId = socket.decoded.id;

		// Imagine it`s normal function name like `KillPrevConnection`
		KillAncient(io, socket, next, onlineUsers, userId);
	})
	.use((socket, next) => SetSocketAdmin(socket, next))
	.use((socket, next) => SetSocketUser(socket, next))
	.on('connection', onConnection);

mongoose
	.connect(`${process.env.MONGODB_CONNECTION}`)
	.then(() => {
		server.listen(8000, () => {
			console.log('Running on port 8000');
		});
	})
	.catch((error) => {
		console.log(`Could not connect to DB\n${error}`);
	});
