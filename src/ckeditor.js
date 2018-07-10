/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadadapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import StrikethroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockquotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import EasyimagePlugin from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImagecaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImagestylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImagetoolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageuploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import AlignmentPlugin from '@ckeditor/ckeditor5-alignment/src/alignment';
import FontPlugin from '@ckeditor/ckeditor5-font/src/font';
import HighlightPlugin from '@ckeditor/ckeditor5-highlight/src/highlight';
import TablePlugin from '@ckeditor/ckeditor5-table/src/table';
import TabletoolbarPlugin from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import QiniuuploaderPlugin from '@liasica/ckeditor5-qiniu-uploader/src/qiniuuploader';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.build = {
	plugins: [
		EssentialsPlugin,
		UploadadapterPlugin,
		AutoformatPlugin,
		BoldPlugin,
		ItalicPlugin,
		StrikethroughPlugin,
		UnderlinePlugin,
		BlockquotePlugin,
		EasyimagePlugin,
		HeadingPlugin,
		ImagePlugin,
		ImagecaptionPlugin,
		ImagestylePlugin,
		ImagetoolbarPlugin,
		ImageuploadPlugin,
		LinkPlugin,
		ListPlugin,
		ParagraphPlugin,
		AlignmentPlugin,
		FontPlugin,
		HighlightPlugin,
		TablePlugin,
		TabletoolbarPlugin,
		QiniuuploaderPlugin
	],
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
			toolbar: [
				'imageStyle:full',
				'imageStyle:side',
				'imageStyle:alignLeft',
				'imageStyle:alignCenter',
				'imageStyle:alignRight',
				'|',
				'imageTextAlternative'
			],
			styles: [
				'full',
				'alignLeft',
				'alignRight'
			]
		},
		table: {
			toolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		language: 'zh-cn'
	}
};
