import { Color, Coords, FENChar } from "./model";
import { Piece } from "./piece";

export class Knight extends Piece{
    protected override _FENChar: FENChar;
    protected override _directions: Coords[]=[
        {x:1,y:2},
        {x:1,y:-2},
        {x:-1,y:2},
        {x:-1,y:-2},
        {x:2,y:2},
        {x:2,y:-1},
        {x:-2,y:1},
        {x:-2,y:-1}


    ];

    constructor(private pieceColor){
        super(pieceColor);
        this._FENChar=pieceColor===Color.White?FENChar.WhiteKnight:FENChar.BlackKnight;
    }
}