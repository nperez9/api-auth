import mongoose, { Document } from 'mongoose';
import { Game, Genres, Platfroms } from '../interfaces';

interface IGameModel extends Game, Document {}

const gameSchema = new mongoose.Schema({});

const gameModel = mongoose.model<IGameModel>('game', gameSchema, 'games');

export default gameModel;
