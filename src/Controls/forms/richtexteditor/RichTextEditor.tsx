import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as React from 'react'
import { handleChangeType } from '../shared/type'

interface ICustomTextFieldProps {
	handleChange: any
	data?: any
} 
const RichTextEditor: React.FC<ICustomTextFieldProps> = ({
	data,
	handleChange,
}) => {

	const editorConfiguration = {
        toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'outdent', 'indent', '|', 'insertTable', 'blockQuote', '|', 'undo', 'redo'  ],
        language: "es",
    }

	return (
        <CKEditor
        editor={ ClassicEditor }
        data={data || ""}
        config={editorConfiguration}
        onChange= {handleChange}
        />
	)
}

export { RichTextEditor }
