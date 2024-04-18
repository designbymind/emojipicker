// emojibase-data/en/compact.json
import {createPicker} from './picmo_5.2.0-custom.js';
// picmo_5.2.0-custom.js notes:
// To update Unicode Emoji versions (use emojibase-data)
// Search for the below string and add latest Unicode Emoji version object to the array:
// 'st=[{version:15.1,emoji:String.fromCodePoint(129768)}, ...]'

const rootElement = document.querySelector('#picker');

const picker = createPicker({
	//emojiData,
	//messages,
	rootElement,
	showPreview: false,
	showRecents: true,
	showSearch: true,
	showCategoryTabs: true,
	showVariants: true,
	className: 'datemaps-emoji-picker',
	theme: 'autoTheme',
	showRecents: false,
	emojiSize: '34px',
	emojisPerRow: 7
});

picker.addEventListener('emoji:select', (emojiObject) => {
	console.log('emoji:select: ', emojiObject);

	// Uncomment Below for Ti App
	window.webkit.messageHandlers.emojiPicker.postMessage({message: emojiObject});

	// Use emojiObject.emoji for Web Browsers
	// alert(JSON.stringify(emojiObject, null, 4))
});
