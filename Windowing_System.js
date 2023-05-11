// @ts-check
/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width=80 , height=60){
    this.width=width;
    this.height=height;
}
Size.prototype.resize = function (newWidth,newHeight){
  this.width=newWidth;
  this.height=newHeight;
}
export function Position(x=0,y=0){
    this.x=x;
    this.y=y;
}
Position.prototype.move = function (newX, newY){
    this.x=newX;
  this.y=newY;
}
export class ProgramWindow {
  screenSize = new Size(800,600);
  size = new Size();
  position = new Position();
  resize (newSize) {
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    let newWidth = newSize.width;
    let newHeight = newSize.height;
    newWidth = newWidth > maxWidth ? maxWidth : newWidth;
    newHeight = newHeight > maxHeight ? maxHeight : newHeight;
    newWidth = newWidth<1 ? 1 : newWidth;
    newHeight = newHeight<1 ? 1 : newHeight;
    this.size.width = newWidth;
    this.size.height = newHeight;
  }
  move (newPosition){
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    let newX = newPosition.x;
    let newY = newPosition.y;
    newX = newX > maxX ? maxX : newX;
    newY = newY > maxY ? maxY : newY;
    newX = newX < 0 ? 0 : newX;
    newY = newY < 0 ? 0 : newY;
    this.position.x = newX;
    this.position.y = newY;
  }
}
export function changeWindow (programWindow){
  const newSize = new Size(400,300);
  const newPosition = new Position(100,150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}
