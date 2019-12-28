interface Window {
    mozRequestAnimationFrame: any;
    msRequestAnimationFrame: any;
    oRequestAnimationFrame: any;
}
declare class AnimationScrollJs {
    private _rAF;
    constructor(el: any, duration: number, callback: Function, context?: any);
    private getTop;
    private easeInOut;
    private getPosition;
}
