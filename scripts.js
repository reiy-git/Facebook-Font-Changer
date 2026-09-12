const PUNCTUATION = ' .,!?;:-—–()[]{}\'"&+=/\\_~#@%*<>|$^`';
const FULL_WIDTH_PUNCTUATION = ' ．，！？；：－—–（）［］｛｝＇＂＆＋＝／＼＿～＃＠％＊＜＞｜＄＾｀';

const STYLE_SPECS = {
    none: { label: 'Normal', upper: '', lower: '', digits: '' },
    'math-bold': {
        label: '𝗕𝗼𝗹𝗱',
        upper: '𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭',
        lower: '𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇',
        digits: '𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵'
    },
    'math-italic': {
        label: '𝘐𝘵𝘢𝘭𝘪𝘤',
        upper: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡',
        lower: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻',
        digits: '0123456789'
    },
    'math-bold-italic': {
        label: '𝘽𝙤𝙡𝙙 𝙄𝙩𝙖𝙡𝙞𝙘',
        upper: '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕',
        lower: '𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯',
        digits: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
    },
    'sans-normal': {
        label: '𝖲𝖺𝗇𝗌',
        upper: '𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹',
        lower: '𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓',
        digits: '𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫'
    },
    'sans-serif-bold': {
        label: '𝐒𝐚𝐧𝐬 𝐁𝐨𝐥𝐝',
        upper: '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙',
        lower: '𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳',
        digits: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
    },
    'sans-serif-italic': {
        label: '𝘚𝘢𝘯𝘴 𝘐𝘵𝘢𝘭𝘪𝘤',
        upper: '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡',
        lower: '𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻',
        digits: '0123456789'
    },
    'sans-serif-bold-italic': {
        label: '𝑺𝒂𝒏𝒔 𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄',
        upper: '𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁',
        lower: '𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛',
        digits: '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗'
    },
    'small-caps': {
        label: 'ꜱᴍᴀʟʟ ᴄᴀᴘꜱ',
        upper: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ',
        lower: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ',
        digits: '0123456789'
    },
    monospaced: {
        label: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎',
        upper: '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉',
        lower: '𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣',
        digits: '𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿'
    }
};

function buildMap(plain, styled) {
    const map = {};
    const plainCharacters = Array.from(plain);
    const styledCharacters = Array.from(styled);

    for (let i = 0; i < plainCharacters.length; i += 1) {
        map[plainCharacters[i]] = styledCharacters[i] || plainCharacters[i];
    }

    return map;
}

function makeStyleMap(styleName) {
    const style = STYLE_SPECS[styleName];
    if (!style) return {};

    return {
        ...buildMap('ABCDEFGHIJKLMNOPQRSTUVWXYZ', style.upper),
        ...buildMap('abcdefghijklmnopqrstuvwxyz', style.lower),
        ...buildMap('0123456789', style.digits),
        ...buildMap(PUNCTUATION, style.punctuation || FULL_WIDTH_PUNCTUATION)
    };
}

const STYLE_CONFIG = Object.fromEntries(
    Object.entries(STYLE_SPECS).map(([styleName, style]) => [styleName, {
        label: style.label,
        map: styleName === 'none' ? {} : makeStyleMap(styleName)
    }])
);

const REVERSE_MAP = Object.entries(STYLE_CONFIG).reduce((map, [styleName, config]) => {
    if (styleName === 'none') return map;
    Object.entries(config.map).forEach(([plain, styled]) => {
        map[styled] = plain;
    });
    return map;
}, {});

function convertText(text, styleName) {
    if (!text || styleName === 'none') return text;
    const map = STYLE_CONFIG[styleName]?.map || {};
    return [...text].map((char) => map[char] || char).join('');
}

function normalizeStyledText(text) {
    return [...text].map((char) => REVERSE_MAP[char] || char).join('');
}

class FontConverter {
    constructor() {
        this.elements = {
            editor: document.getElementById('unicodeEditor'),
            styleSelector: document.getElementById('fontStyleSelector'),
            applyBtn: document.getElementById('applyStyleButton'),
            resetBtn: document.getElementById('resetStyleButton'),
            copyBtn: document.getElementById('copyToClipboardButton'),
            copyStatus: document.querySelector('.copy-status')
        };

        this.activeStyle = 'none';
        this.isProcessing = false;

        this.populateStyles();
        this.bindEvents();
        this.resizeEditor();
    }

    populateStyles() {
        const selector = this.elements.styleSelector;
        selector.innerHTML = Object.entries(STYLE_CONFIG)
            .map(([styleName, config]) => `<option value="${styleName}">${config.label}</option>`)
            .join('');
        selector.value = 'none';
    }

    bindEvents() {
        this.elements.editor.addEventListener('beforeinput', (event) => this.handleTyping(event));
        this.elements.editor.addEventListener('input', () => this.resizeEditor());
        this.elements.styleSelector.addEventListener('change', (event) => {
            this.activeStyle = event.target.value;
        });
        this.elements.applyBtn.addEventListener('click', (event) => this.applyStyle(event));
        this.elements.resetBtn.addEventListener('click', (event) => this.resetStyle(event));
        this.elements.copyBtn.addEventListener('click', () => this.handleCopy());
    }

    handleTyping(event) {
        if (event.inputType !== 'insertText' || !event.data || this.activeStyle === 'none') return;

        event.preventDefault();
        const position = this.elements.editor.selectionStart;
        const styledText = convertText(event.data, this.activeStyle);
        this.insertText(styledText, position);
        this.resizeEditor();
    }

    resizeEditor() {
        const { editor } = this.elements;
        editor.style.height = 'auto';
        editor.style.height = `${Math.max(editor.scrollHeight, 150)}px`;
    }

    applyStyle(event) {
        event.preventDefault();

        const editor = this.elements.editor;
        const { selectionStart, selectionEnd, value } = editor;
        if (selectionStart === selectionEnd) return;

        const selectedText = value.slice(selectionStart, selectionEnd);
        const plainText = normalizeStyledText(selectedText);
        const styledText = convertText(plainText, this.activeStyle);

        editor.value = value.slice(0, selectionStart) + styledText + value.slice(selectionEnd);
        editor.selectionStart = selectionStart;
        editor.selectionEnd = selectionStart + styledText.length;
        editor.focus();
        this.resizeEditor();
    }

    resetStyle(event) {
        event.preventDefault();

        const editor = this.elements.editor;
        const { selectionStart, selectionEnd, value } = editor;
        if (selectionStart === selectionEnd) return;

        const selectedText = value.slice(selectionStart, selectionEnd);
        const plainText = normalizeStyledText(selectedText);

        editor.value = value.slice(0, selectionStart) + plainText + value.slice(selectionEnd);
        editor.selectionStart = selectionStart;
        editor.selectionEnd = selectionStart + plainText.length;
        editor.focus();
        this.resizeEditor();

        this.elements.styleSelector.value = 'none';
        this.activeStyle = 'none';
    }

    async handleCopy() {
        if (this.isProcessing) return;

        this.isProcessing = true;
        try {
            await navigator.clipboard.writeText(this.elements.editor.value);
            this.updateCopyButton(true);
        } catch {
            this.updateCopyButton(false);
        }
    }

    updateCopyButton(success) {
        const { copyBtn, copyStatus } = this.elements;
        copyStatus.textContent = success ? 'Copied!' : 'Copy Failed';
        copyBtn.classList.toggle('copied', success);

        setTimeout(() => {
            copyStatus.textContent = 'Copy Styled Text';
            copyBtn.classList.remove('copied');
            this.isProcessing = false;
        }, 2000);
    }

    insertText(text, start, end = start) {
        const { editor } = this.elements;
        editor.value = editor.value.slice(0, start) + text + editor.value.slice(end);
        editor.selectionStart = editor.selectionEnd = start + text.length;
        editor.focus();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FontConverter();
});
