export const getArrayBuffer = (file: File): Promise<string | ArrayBuffer | null> => {
    
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader = new FileReader();
        reader.onload = function() {
            resolve(this.result)
        }
        reader.onerror = () => {
            reject(null)
        }
        reader.readAsArrayBuffer(file);
    })
}

export const getFileExtension = (fileName: string) => fileName.split('.').pop()

export const EXTENSIONES = [
	'.jpg',
	'.jpeg',
	'.png',
	'.doc',
	'.docx',
	'.pdf',
	'.xls',
	'.xlsx',
].map((v, i) => ({ id: i + 1, name: v }))