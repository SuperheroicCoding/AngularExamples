import {Injectable} from '@angular/core';
import {Vector} from './vector';

@Injectable()
export class CanvasDrawHelperService {

  constructor() {
  }

  drawVec(vec: Vector, radius: number, ctx: CanvasRenderingContext2D) {
    this.drawPoint(vec.x, vec.y, radius, ctx);
  }

  drawPoint(x: number, y: number, radius: number, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fill();
  }

  drawLine(from: Vector, to: Vector, ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
  }

}
