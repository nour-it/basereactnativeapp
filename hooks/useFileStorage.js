import * as FileSystem from 'expo-file-system';


export default function useFileStorage() {

	async function saveFile(fileName, content) {
		return await FileSystem.writeAsStringAsync(
			FileSystem.documentDirectory + fileName,
			content,
			// FileSystem.EncodingType.Base64
		)
			.catch(err => console.error('error while saving file ', err))
	}

	async function getFileContent(fileName) {
		return await FileSystem.readAsStringAsync(
			FileSystem.documentDirectory + fileName,
			//FileSystem.EncodingType.Base64
		)
			.catch(err => console.error('error while get file content ', err))

	}

	async function fileExists(file) {
		let files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory,)
			.catch(err => console.error('error while finding file ', err))
		// console.log(files)
		return files.find(f => f == file)
	}

	async function removeFile(file) {
		await FileSystem.deleteAsync(
			FileSystem.documentDirectory + file,
			//FileSystem.EncodingType.Base64
		)

	}

	/**
	 * @typedef {"document" | "cache"} DirType
	 * @param {string} dir 
	 * @param {DirType} type
	 * @returns {Array}
	 */
	async function getFiles(dir = "", type) {
		switch (type) {
			case ('document'):
				type = FileSystem.documentDirectory
				break
			case ("cache"):
				type = FileSystem.cacheDirectory;
				break
			default:
				type = FileSystem.cacheDirectory
				break
		}

		let files = await FileSystem.readDirectoryAsync(type + dir)
			.catch(err => console.error('error while reading files ', err))

		return files;
	}

	return { saveFile, getFileContent, fileExists, removeFile, getFiles }

}