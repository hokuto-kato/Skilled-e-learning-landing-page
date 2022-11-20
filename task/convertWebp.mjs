import { ImagePool } from "@squoosh/lib"
import { readdirSync, readFileSync } from "fs"
import { writeFile } from "fs/promises"
import path from "path"

const imagePool = new ImagePool()
const IMAGE_DIR = "./src/assets/img/"
const imageFileList = readdirSync(IMAGE_DIR).filter((file) => {
	const regex = /\.(jpe?g|png)$/i
	return regex.test(file)
})
const imagePoolList = imageFileList.map((file) => {
	const imageFile = readFileSync(`${IMAGE_DIR}/${file}`);
	const fileName = path.parse(`${IMAGE_DIR}/${file}`).name;
	const image = imagePool.ingestImage(imageFile.buffer.slice(imageFile.byteOffset, imageFile.byteOffset + imageFile.byteLength))
	return { name: fileName, image };
});

const webpEncodeOptions = {
	webp: {quality: 75}
}

await Promise.all(
	imagePoolList.map(async(item) => {
		const { image } = item
		await image.encode(webpEncodeOptions)
	}),
)

for (const item of imagePoolList) {
	const {
		name,
		image: { encodedWith },
	} = item
	const data = await encodedWith.webp
	await writeFile(`${IMAGE_DIR}/${name}.webp`, data.binary)
}

// imagePoolを閉じる
await imagePool.close();
