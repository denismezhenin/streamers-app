"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const streamer_routes_1 = require("./routes/streamer-routes");
const app = (0, express_1.default)();
const db = "mongodb+srv://Dzianis:.V24MJrn8pKrN9H@streamers.6dtpau7.mongodb.net/?retryWrites=true&w=majority";
const PORT = 3000;
mongoose_1.default.connect(db).then(res => console.log("success")).catch(err => console.log(err));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`listening port ${PORT}`);
});
app.use(streamer_routes_1.streamerRouter);
