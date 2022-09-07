const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
// const density = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";
// const density =  '         .:░▒▓█';

let sourceImage;

function preload() {
	sourceImage = loadImage("selfie.jpeg");
}

function setup() {
	noCanvas();
	sourceImage.loadPixels();
	for (let j = 0; j < sourceImage.height; j++) {
		let row = "";
		for (let i = 0; i < sourceImage.width; i++) {
			const pixelIndex = (i + j * sourceImage.width) * 4;
			const r = sourceImage.pixels[pixelIndex];
			const g = sourceImage.pixels[pixelIndex + 1];
			const b = sourceImage.pixels[pixelIndex + 2];

			const avg = (r + g + b) / 3;

			const len = density.length;
			const charIndex = floor(map(avg, 0, 255, len, 0));

			const c = density.charAt(charIndex);
			if (c === " ") row += "&nbsp;";
			else row += c;
		}
		createDiv(row);
	}
}
