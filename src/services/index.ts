import api from "./api";
import {
  GET_CHARACTERS_BY_GAME, 
} from "../constants";

export async function getCharactersByGame( game: string ) {
  try {
    const response = await api.get(GET_CHARACTERS_BY_GAME(game));

    const { data } = response;

    return data;
  } catch (error) {
    throw "Falha, tente novamente!";
  }
}