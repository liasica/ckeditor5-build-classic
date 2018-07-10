/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

'use strict'

module.exports = {
	// The editor creator to use.
	editor: '@ckeditor/ckeditor5-editor-classic/src/classiceditor',

	// The name under which the editor will be exported.
	moduleName: 'ClassicEditor',

	// Plugins to include in the build.
	plugins: [
		'@ckeditor/ckeditor5-essentials/src/essentials',

		'@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter',
		'@ckeditor/ckeditor5-autoformat/src/autoformat',
		'@ckeditor/ckeditor5-basic-styles/src/bold',
		'@ckeditor/ckeditor5-basic-styles/src/italic',
		'@ckeditor/ckeditor5-basic-styles/src/strikethrough',
		'@ckeditor/ckeditor5-basic-styles/src/underline',
		'@ckeditor/ckeditor5-block-quote/src/blockquote',
		'@ckeditor/ckeditor5-easy-image/src/easyimage',
		'@ckeditor/ckeditor5-heading/src/heading',
		'@ckeditor/ckeditor5-image/src/image',
		'@ckeditor/ckeditor5-image/src/imagecaption',
		'@ckeditor/ckeditor5-image/src/imagestyle',
		'@ckeditor/ckeditor5-image/src/imagetoolbar',
		'@ckeditor/ckeditor5-image/src/imageupload',
		'@ckeditor/ckeditor5-link/src/link',
		'@ckeditor/ckeditor5-list/src/list',
		'@ckeditor/ckeditor5-paragraph/src/paragraph',
		'@ckeditor/ckeditor5-alignment/src/alignment',
		'@ckeditor/ckeditor5-font/src/font',
		'@ckeditor/ckeditor5-highlight/src/highlight',
		'@ckeditor/ckeditor5-table/src/table',
		'@ckeditor/ckeditor5-table/src/tabletoolbar',
		'@liasica/ckeditor5-qiniu-uploader/src/qiniuuploader'
	],

	// Editor config.
	config: {
		toolbar: {
			items: [
				'undo',
				'redo',
				'|',
				'fontSize',
				'fontFamily',
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'highlight',
				'|',
				'alignment:left',
				'alignment:right',
				'alignment:center',
				'alignment:justify',
				'|',
				'link',
				'bulletedList',
				'numberedList',
				'imageUpload',
				'blockQuote',
				'insertTable'
			]
		},

		image: {
			toolbar: ['imageStyle:full', 'imageStyle:side', 'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight', '|', 'imageTextAlternative'],
			styles: [
				// This option is equal to a situation where no style is applied.
				'full',
				// This represents an image aligned to the left.
				'alignLeft',
				// This represents an image aligned to the right.
				'alignRight'
			]
		},
		table: {
			toolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
		},

		// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
		language: 'zh-cn'
	}
}
