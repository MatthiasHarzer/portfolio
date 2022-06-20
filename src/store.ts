import {writable} from "svelte/store";
import {drawGlowingText, rgbToHex} from "./Util/util";

const canvas: HTMLCanvasElement = document.createElement('canvas');
canvas.width = 100;
canvas.height = 100;
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const updateFavicon = (url: string) => {
    let link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

const createRainbow = () =>{
    const {subscribe, update} = writable([100,0,255]);
    let current_color = [100,0,255];
    let index = 0;

    const minusIndex = () => index == 0 ? 2 : index - 1;
    const incIndex = () => index = index == 2 ? 0 : index + 1;

    let int = setInterval(() => {
        update(current => {
            if(current[index] == 255){
                current[minusIndex()]--;
                if(current[minusIndex()] == 0){
                    incIndex();
                }
            }else{
                current[index]++;
            }
            current_color = current;
            return current;
        });
    }, 50);

    return {
        subscribe,
        get: ()=>current_color,
        join() {
            return current_color.join(",")
        }
    }
}
export const rainbow = createRainbow();


setInterval(()=>{
    const color = rainbow.get();

    if(!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // @ts-ignore
    drawGlowingText(ctx, "MH", canvas.width/2, (canvas.height/2), "#ffffff", rgbToHex(...color), 10);
    updateFavicon(canvas.toDataURL());
}, 1000)
rainbow.subscribe((color: number[]) => {


});
