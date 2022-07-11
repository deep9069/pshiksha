import React, { Component } from 'react';
import Editor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from '@ckeditor/ckeditor5-react'


class MyCkeditor extends Component {
    render() {
        return (
            <div className="Ap">
                {/* <h2>Using CKEditor 5 from online builder in React</h2> */}
                
                <CKEditor
                
                    editor={ Editor }
                    // data="<p>Type</p>"
                    config={{
                        
                        placeholder:
                            "Start typing your blog post here...",
                        }}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default MyCkeditor;
