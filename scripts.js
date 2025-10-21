// ====================================================================
// Configuration: UNICODE FONT MAPS
// Maps standard ASCII characters to their mathematical alphanumeric forms.
// ====================================================================
const FONT_MAPS = {
    // Note: The full maps from the previous step are required here. 
    // Only 'none' and 'sans-bold' are shown as examples.
    'sans-normal': {
        'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧', 'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖫', 'M': '𝖬', 'N': '𝖭', 'O': '𝖮', 'P': '𝖯', 'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷', 'Y': '𝖸', 'Z': '𝖹',
        'a': '𝖺', 'b': '𝖻', 'c': '𝖼', 'd': '𝖽', 'e': '𝖾', 'f': '𝖿', 'g': '𝗀', 'h': '𝗁', 'i': '𝗂', 'j': '𝗃', 'k': '𝗄', 'l': '𝗅', 'm': '𝗆', 'n': '𝗇', 'o': '𝗈', 'p': '𝗉', 'q': '𝗊', 'r': '𝗋', 's': '𝗌', 't': '𝗍', 'u': '𝗎', 'v': '𝗏', 'w': '𝗐', 'x': '𝗑', 'y': '𝗒', 'z': '𝗓',
        '0': '𝟢', '1': '𝟣', '2': '𝟤', '3': '𝟥', '4': '𝟦', '5': '𝟧', '6': '𝟨', '7': '𝟩', '8': '𝟪', '9': '𝟫',
        ' ': ' ', '\n': '\n'
    },
    // Sans Bold (This was previously just 'bold')
    'sans-bold': {
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
        '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵',
        ' ': ' ', '\n': '\n'
    },
    // Sans Italic
    'sans-italic': {
        'A': '𝘈', 'B': '𝘉', 'C': '𝘊', 'D': '𝘋', 'E': '𝘌', 'F': '𝘍', 'G': '𝘎', 'H': '𝘏', 'I': '𝘐', 'J': '𝘑', 'K': '𝘒', 'L': '𝘓', 'M': '𝘔', 'N': '𝘕', 'O': '𝘖', 'P': '𝘗', 'Q': '𝘘', 'R': '𝘙', 'S': '𝘚', 'T': '𝘛', 'U': '𝘜', 'V': '𝘝', 'W': '𝘞', 'X': '𝘟', 'Y': '𝘠', 'Z': '𝘡',
        'a': '𝘢', 'b': '𝘣', 'c': '𝘤', 'd': '𝘥', 'e': '𝘦', 'f': '𝘧', 'g': '𝘨', 'h': '𝘩', 'i': '𝘪', 'j': '𝘫', 'k': '𝘬', 'l': '𝘭', 'm': '𝘮', 'n': '𝘯', 'o': '𝘰', 'p': '𝘱', 'q': '𝘲', 'r': '𝘳', 's': '𝘴', 't': '𝘵', 'u': '𝘶', 'v': '𝘷', 'w': '𝘸', 'x': '𝘹', 'y': '𝘺', 'z': '𝘻',
        ' ': ' ', '\n': '\n'
    },
    // --- Serif Styles (Math Regular is a good proxy for Serif Normal) ---
    'serif-normal': {
        'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
        'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧',
        '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', // No math-serif digits, use normal
        ' ': ' ', '\n': '\n'
    },
    // Serif Bold (Previously 'bold-italic' in the prior code, now separated for clarity)
    'serif-bold': {
        'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌', 'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙',
        'a': '𝐚', 'b': '𝐛', 'c': '𝐜', 'd': '𝐝', 'e': '𝐞', 'f': '𝐟', 'g': '𝐠', 'h': '𝐡', 'i': '𝐢', 'j': '𝐣', 'k': '𝐤', 'l': '𝐥', 'm': '𝐦', 'n': '𝐧', 'o': '𝐨', 'p': '𝐩', 'q': '𝐪', 'r': '𝐫', 's': '𝐬', 't': '𝐭', 'u': '𝐮', 'v': '𝐯', 'w': '𝐰', 'x': '𝐱', 'y': '𝐲', 'z': '𝐳',
        '0': '𝟎', '1': '𝟏', '2': '𝟐', '3': '𝟑', '4': '𝟒', '5': '𝟓', '6': '𝟔', '7': '𝟕', '8': '𝟖', '9': '𝟗',
        ' ': ' ', '\n': '\n'
    },
    // Serif Italic
    'serif-italic': {
        'A': '𝑨', 'B': '𝑩', 'C': '𝑪', 'D': '𝑫', 'E': '𝑬', 'F': '𝑭', 'G': '𝑮', 'H': '𝑯', 'I': '𝑰', 'J': '𝑱', 'K': '𝑲', 'L': '𝑳', 'M': '𝑴', 'N': '𝑵', 'O': '𝑶', 'P': '𝑷', 'Q': '𝑸', 'R': '𝑹', 'S': '𝑺', 'T': '𝑻', 'U': '𝑼', 'V': '𝑽', 'W': '𝑾', 'X': '𝑿', 'Y': '𝒀', 'Z': '𝒁',
        'a': '𝒂', 'b': '𝒃', 'c': '𝒄', 'd': '𝒅', 'e': '𝒆', 'f': '𝒇', 'g': '𝒈', 'h': '𝒉', 'i': '𝒊', 'j': '𝒋', 'k': '𝒌', 'l': '𝒍', 'm': '𝒎', 'n': '𝒏', 'o': '𝒐', 'p': '𝒑', 'q': '𝒒', 'r': '𝒓', 's': '𝒔', 't': '𝒕', 'u': '𝒖', 'v': '𝒗', 'w': '𝒘', 'x': '𝒙', 'y': '𝒚', 'z': '𝒛',
        ' ': ' ', '\n': '\n'
    },
    // Monospaced 
    'monospaced': {
        'A': '𝙰', 'B': '𝙱', 'C': '𝙲', 'D': '𝙳', 'E': '𝙴', 'F': '𝙵', 'G': '𝙶', 'H': '𝙷', 'I': '𝙸', 'J': '𝙹', 'K': '𝙺', 'L': '𝙻', 'M': '𝙼', 'N': '𝙽', 'O': '𝙾', 'P': '𝙿', 'Q': '𝚀', 'R': '𝚁', 'S': '𝚂', 'T': '𝚃', 'U': '𝚄', 'V': '𝚅', 'W': '𝚆', 'X': '𝚇', 'Y': '𝚈', 'Z': '𝚉',
        'a': '𝚊', 'b': '𝚋', 'c': '𝚌', 'd': '𝚍', 'e': '𝚎', 'f': '𝚏', 'g': '𝚐', 'h': '𝚑', 'i': '𝚒', 'j': '𝚓', 'k': '𝚔', 'l': '𝚕', 'm': '𝚖', 'n': '𝚗', 'o': '𝚘', 'p': '𝚙', 'q': '𝚚', 'r': '𝚛', 's': '𝚜', 't': '𝚝', 'u': '𝚞', 'v': '𝚟', 'w': '𝚠', 'x': '𝚡', 'y': '𝚢', 'z': '𝚣',
        '0': '𝟶', '1': '𝟷', '2': '𝟸', '3': '𝟹', '4': '𝟺', '5': '𝟻', '6': '𝟼', '7': '𝟽', '8': '𝟾', '9': '𝟿',
        ' ': ' ', '\n': '\n'
    },
    'none': {}
};

// Create a single reverse map for efficient de-styling
const REVERSE_MAP = (() => {
    const map = {};
    for (const style in FONT_MAPS) {
        if (style === 'none') continue;
        const styleMap = FONT_MAPS[style];
        for (const asciiChar in styleMap) {
            map[styleMap[asciiChar]] = asciiChar;
        }
    }
    return map;
})();


// ====================================================================
// DOM References and State Management
// ====================================================================
const textEditor = document.getElementById('unicodeEditor');
const styleSelector = document.getElementById('fontStyleSelector');
const applyButton = document.getElementById('applyStyleButton');
const resetButton = document.getElementById('resetStyleButton');
const copyButton = document.getElementById('copyToClipboardButton');

let activeStyleKey = 'none';


// ====================================================================
// Core Conversion Functions
// ====================================================================

/**
 * Reverses a Unicode character back to its standard ASCII equivalent using the REVERSE_MAP.
 * @param {string} styledChar - The Unicode character.
 * @returns {string} The corresponding ASCII character, or the original if not found.
 */
function getStandardChar(styledChar) {
    // If the character is in the reverse map, return its standard ASCII key.
    return REVERSE_MAP[styledChar] || styledChar;
}

/**
 * Converts a block of text, first de-styling any Unicode characters, 
 * then re-styling them to the target font.
 * @param {string} text - The text to convert.
 * @param {string} targetStyleKey - The key for the target font map.
 * @returns {string} The newly styled text.
 */
function applyStyleConversion(text, targetStyleKey) {
    if (targetStyleKey === 'none' || !FONT_MAPS[targetStyleKey]) {
        // If the target is 'none', we only need to de-style the text
        return Array.from(text).map(getStandardChar).join('');
    }

    const targetMap = FONT_MAPS[targetStyleKey];
    let convertedText = '';

    for (const char of text) {
        // 1. Get the standard ASCII character (de-style if necessary)
        const standardChar = getStandardChar(char);

        // 2. Convert the standard character to the target style
        // If conversion fails (e.g., punctuation), use the original char
        convertedText += targetMap[standardChar] || char; 
    }
    return convertedText;
}


// ====================================================================
// DOM Manipulation and Event Handlers
// ====================================================================

/**
 * Applies the selected style to the currently highlighted text in the editor.
 * @param {string} styleKey - The style key to apply.
 */
function applyStyleToSelection(styleKey) {
    const start = textEditor.selectionStart;
    const end = textEditor.selectionEnd;
    const originalText = textEditor.value;

    if (start === end && styleKey !== 'none') {
        textEditor.focus();
        return;
    }

    const textBefore = originalText.substring(0, start);
    const selectedText = originalText.substring(start, end);
    const textAfter = originalText.substring(end);

    const convertedText = applyStyleConversion(selectedText, styleKey);

    textEditor.value = textBefore + convertedText + textAfter;

    // Restore the selection/cursor position
    textEditor.selectionStart = start;
    textEditor.selectionEnd = start + convertedText.length;
    textEditor.focus();
}


/**
 * Handles live text input to convert characters as they are typed.
 */
function handleLiveTyping(event) {
    if (event.inputType === 'insertText' && event.data && activeStyleKey !== 'none') {
        
        event.preventDefault(); 
        
        const styledChar = applyStyleConversion(event.data, activeStyleKey);
        
        const start = textEditor.selectionStart;
        const end = textEditor.selectionEnd;
        const originalText = textEditor.value;

        // Insert the styled character at the cursor
        const textBefore = originalText.substring(0, start);
        const textAfter = originalText.substring(end);

        textEditor.value = textBefore + styledChar + textAfter;
        
        // Update cursor position
        const newCursorPosition = start + styledChar.length;
        textEditor.selectionStart = newCursorPosition;
        textEditor.selectionEnd = newCursorPosition;
    }
}

/**
 * Handles text copying to the clipboard.
 */
function handleCopyText() {
    textEditor.select();
    navigator.clipboard.writeText(textEditor.value)
        .then(() => {
            
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
            // Fallback
            document.execCommand('copy');
        });
}


// ====================================================================
// Initialization
// ====================================================================

/**
 * Sets up all event listeners.
 */
function initializeEventListeners() {
    // 1. Live Typing Listener
    textEditor.addEventListener('beforeinput', handleLiveTyping);

    // 2. Style Selector Change: Update the global state
    styleSelector.addEventListener('change', () => {
        activeStyleKey = styleSelector.value;
    });

    // 3. Manual Apply Button: Apply the currently selected style to the selection
    applyButton.addEventListener('mousedown', (e) => {
        e.preventDefault(); 
        applyStyleToSelection(activeStyleKey);
    });

    // 4. Reset Button: Sets style to 'none' and applies it to selection
    resetButton.addEventListener('mousedown', (e) => {
        e.preventDefault();
        styleSelector.value = 'none';
        activeStyleKey = 'none';
        applyStyleToSelection('none');
    });

    // 5. Copy Button
    copyButton.addEventListener('click', handleCopyText);

    // Initial state setup
    activeStyleKey = styleSelector.value;
}

// Run initialization when the script loads
initializeEventListeners();

/**
 * @constant {Object} UNICODE_CONFIGURATION
 * Configuration constants for the Unicode text converter application
 */
const UNICODE_CONFIGURATION = {
    CLIPBOARD: {
        DEFAULT_TEXT: 'Copy Styled Text',
        SUCCESS_TEXT: 'Copied!',
        RESET_DELAY_MS: 2000,
        NOTIFICATION_DURATION_MS: 3000
    },
    ANIMATION: {
        TRANSITION_DURATION_MS: 300
    }
};

/**
 * Font Converter Application
 * Handles Unicode font conversion and clipboard operations
 */
class FontConverter {
    constructor() {
        // Font maps remain unchanged
        this.fontMaps = FONT_MAPS;
        this.reverseMap = REVERSE_MAP;
        this.currentStyle = 'none';
        this.isProcessing = false;
        
        this.initializeElements();
        this.bindEventListeners();
    }

    initializeElements() {
        this.elements = {
            editor: document.getElementById('unicodeEditor'),
            styleSelector: document.getElementById('fontStyleSelector'),
            applyBtn: document.getElementById('applyStyleButton'),
            resetBtn: document.getElementById('resetStyleButton'),
            copyBtn: document.getElementById('copyToClipboardButton'),
            copyStatus: document.querySelector('.copy-status')
        };
    }

    bindEventListeners() {
        this.elements.editor.addEventListener('beforeinput', this.handleTyping.bind(this));
        this.elements.styleSelector.addEventListener('change', this.handleStyleChange.bind(this));
        this.elements.applyBtn.addEventListener('click', this.applyStyle.bind(this));
        this.elements.resetBtn.addEventListener('click', this.resetStyle.bind(this));
        this.elements.copyBtn.addEventListener('click', this.handleCopy.bind(this));
    }

    handleTyping(event) {
        if (!this.isValidTypingEvent(event)) return;
        
        event.preventDefault();
        const pos = this.elements.editor.selectionStart;
        const convertedChar = this.convertText(event.data, this.currentStyle);
        this.insertText(convertedChar, pos);
    }

    isValidTypingEvent(event) {
        return event.inputType === 'insertText' && 
               event.data && 
               this.currentStyle !== 'none';
    }

    handleStyleChange(event) {
        this.currentStyle = event.target.value;
    }

    applyStyle(event) {
        event.preventDefault();
        const { editor } = this.elements;
        const { selectionStart: start, selectionEnd: end, value } = editor;

        if (start === end && this.currentStyle !== 'none') return;

        const selectedText = value.substring(start, end);
        const convertedText = this.convertText(selectedText, this.currentStyle);
        
        this.insertText(convertedText, start, end);
    }

    resetStyle(event) {
        event.preventDefault();
        this.elements.styleSelector.value = 'none';
        this.currentStyle = 'none';
        this.applyStyle(event);
    }

    async handleCopy() {
        if (this.isProcessing) return;
        this.isProcessing = true;

        try {
            await navigator.clipboard.writeText(this.elements.editor.value);
            this.updateCopyButton(true);
        } catch (error) {
            console.error('Copy failed:', error);
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

    convertText(text, style) {
        if (style === 'none' || !this.fontMaps[style]) {
            return Array.from(text).map(this.getStandardChar.bind(this)).join('');
        }

        return Array.from(text)
            .map(char => {
                const standardChar = this.getStandardChar(char);
                return this.fontMaps[style][standardChar] || char;
            })
            .join('');
    }

    getStandardChar(char) {
        return this.reverseMap[char] || char;
    }

    insertText(text, start, end = start) {
        const { editor } = this.elements;
        const currentText = editor.value;
        
        editor.value = currentText.slice(0, start) + text + currentText.slice(end);
        editor.selectionStart = editor.selectionEnd = start + text.length;
        editor.focus();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FontConverter();
});