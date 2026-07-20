// Code Language Converter - Shared JavaScript
// This file provides functionality to convert code between different languages

console.log('Code converter script loaded!');

const codeConverter = {
    // Language mappings and conversion rules
    languageMap: {
        'csharp': {
            name: 'C#',
            icon: '🔷'
        },
        'python': {
            name: 'Python',
            icon: '🐍'
        },
        'javascript': {
            name: 'JavaScript',
            icon: '⚡'
        },
        'java': {
            name: 'Java',
            icon: '☕'
        },
        'typescript': {
            name: 'TypeScript',
            icon: '📘'
        }
    },

    // Simple code conversion patterns (basic examples)
    conversionRules: {
        'csharp': {
            'python': {
                'public class': 'class',
                'public void': 'def',
                'string': 'str',
                'int': 'int',
                'var': '',
                'Console.WriteLine': 'print',
                '{': ':',
                '}': '',
                'using ': 'import ',
                ';': ''
            },
            'javascript': {
                'public class': 'class',
                'public void': '',
                'string': 'string',
                'int': 'let',
                'var': 'let',
                'Console.WriteLine': 'console.log',
                'using ': '// import ',
                ';': ';'
            },
            'java': {
                'public class': 'public class',
                'public void': 'public void',
                'string': 'String',
                'int': 'int',
                'var': 'var',
                'Console.WriteLine': 'System.out.println',
                'using ': 'import ',
                ';': ';'
            },
            'typescript': {
                'public class': 'class',
                'public void': '',
                'string': 'string',
                'int': 'number',
                'var': 'let',
                'Console.WriteLine': 'console.log',
                'using ': '// import ',
                ';': ';'
            }
        },
        'python': {
            'csharp': {
                'class ': 'public class ',
                'def ': 'public void ',
                'str': 'string',
                'print(': 'Console.WriteLine(',
                ':': '{',
                'import ': 'using ',
                'self, ': '',
                'self.': 'this.'
            },
            'javascript': {
                'class ': 'class ',
                'def ': 'function ',
                'str': 'string',
                'print(': 'console.log(',
                ':': '{',
                'import ': '// import ',
                'self, ': '',
                'self.': 'this.'
            },
            'java': {
                'class ': 'public class ',
                'def ': 'public void ',
                'str': 'String',
                'print(': 'System.out.println(',
                ':': '{',
                'import ': 'import ',
                'self, ': '',
                'self.': 'this.'
            },
            'typescript': {
                'class ': 'class ',
                'def ': 'function ',
                'str': 'string',
                'print(': 'console.log(',
                ':': '{',
                'import ': 'import ',
                'self, ': '',
                'self.': 'this.'
            }
        },
        'javascript': {
            'csharp': {
                'class ': 'public class ',
                'function ': 'public void ',
                'let ': 'var ',
                'const ': 'var ',
                'console.log': 'Console.WriteLine',
                '// import ': 'using '
            },
            'python': {
                'class ': 'class ',
                'function ': 'def ',
                'let ': '',
                'const ': '',
                'console.log': 'print',
                '// import ': 'import ',
                '{': ':',
                '}': ''
            },
            'java': {
                'class ': 'public class ',
                'function ': 'public void ',
                'let ': 'var ',
                'const ': 'final var ',
                'console.log': 'System.out.println',
                '// import ': 'import '
            },
            'typescript': {
                'class ': 'class ',
                'function ': 'function ',
                'let ': 'let ',
                'const ': 'const ',
                'console.log': 'console.log',
                '// import ': 'import '
            }
        },
        'java': {
            'csharp': {
                'public class': 'public class',
                'public void': 'public void',
                'String': 'string',
                'System.out.println': 'Console.WriteLine',
                'import ': 'using '
            },
            'python': {
                'public class': 'class',
                'public void': 'def',
                'String': 'str',
                'System.out.println': 'print',
                'import ': 'import ',
                '{': ':',
                '}': '',
                ';': ''
            },
            'javascript': {
                'public class': 'class',
                'public void': 'function',
                'String': 'string',
                'System.out.println': 'console.log',
                'import ': '// import '
            },
            'typescript': {
                'public class': 'class',
                'public void': 'function',
                'String': 'string',
                'System.out.println': 'console.log',
                'import ': 'import '
            }
        },
        'typescript': {
            'csharp': {
                'class ': 'public class ',
                'function ': 'public void ',
                'string': 'string',
                'number': 'int',
                'let ': 'var ',
                'const ': 'var ',
                'console.log': 'Console.WriteLine',
                'import ': 'using '
            },
            'python': {
                'class ': 'class ',
                'function ': 'def ',
                'string': 'str',
                'number': 'int',
                'let ': '',
                'const ': '',
                'console.log': 'print',
                'import ': 'import ',
                '{': ':',
                '}': '',
                ';': ''
            },
            'javascript': {
                'class ': 'class ',
                'function ': 'function ',
                'string': 'string',
                'number': 'number',
                'let ': 'let ',
                'const ': 'const ',
                'console.log': 'console.log',
                'import ': '// import '
            },
            'java': {
                'class ': 'public class ',
                'function ': 'public void ',
                'string': 'String',
                'number': 'int',
                'let ': 'var ',
                'const ': 'final var ',
                'console.log': 'System.out.println',
                'import ': 'import '
            }
        }
    },

    // Convert code from one language to another
    convertCode(code, fromLang, toLang) {
        if (fromLang === toLang) return code;
        
        const rules = this.conversionRules[fromLang]?.[toLang];
        if (!rules) {
            console.log(`No conversion rules available from ${fromLang} to ${toLang}`);
            return code;
        }

        let convertedCode = code;
        for (const [pattern, replacement] of Object.entries(rules)) {
            convertedCode = convertedCode.split(pattern).join(replacement);
        }

        return convertedCode;
    },

    // Initialize language selector for a code block
    initLanguageSelector(codeBlock) {
        const header = codeBlock.querySelector('.code-editor-header');
        if (!header) return;

        // Check if selector already exists
        if (header.querySelector('.language-selector')) return;

        // Create language selector
        const selector = document.createElement('select');
        selector.className = 'language-selector';
        selector.innerHTML = `
            <option value="original">Original</option>
            <option value="csharp">C#</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="typescript">TypeScript</option>
        `;

        // Add change event listener
        selector.addEventListener('change', (e) => {
            const targetLang = e.target.value;
            const codeContent = codeBlock.querySelector('.code-editor-content code');
            const originalCode = codeContent.dataset.originalCode || codeContent.innerText;

            console.log('Language changed to:', targetLang);
            console.log('Original code:', originalCode.substring(0, 100));

            if (targetLang === 'original') {
                codeContent.innerText = originalCode;
            } else {
                // Detect original language from file title
                const title = header.querySelector('.code-editor-title')?.innerText || '';
                const fromLang = this.detectLanguage(title);
                console.log('Detected source language:', fromLang, 'from title:', title);
                
                const convertedCode = this.convertCode(originalCode, fromLang, targetLang);
                console.log('Converted code:', convertedCode.substring(0, 100));
                
                codeContent.innerText = convertedCode;
            }
        });

        // Store original code
        const codeContent = codeBlock.querySelector('.code-editor-content code');
        if (!codeContent.dataset.originalCode) {
            codeContent.dataset.originalCode = codeContent.innerText;
        }

        // Add selector to header
        header.appendChild(selector);
    },

    // Detect language from file title
    detectLanguage(title) {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('.cs') || lowerTitle.includes('csharp')) return 'csharp';
        if (lowerTitle.includes('.py') || lowerTitle.includes('python')) return 'python';
        if (lowerTitle.includes('.js') || lowerTitle.includes('javascript')) return 'javascript';
        if (lowerTitle.includes('.ts') || lowerTitle.includes('typescript')) return 'typescript';
        if (lowerTitle.includes('.java')) return 'java';
        return 'csharp'; // default
    },

    // Initialize all code blocks on the page
    initAllCodeBlocks() {
        console.log('Initializing all code blocks...');
        const codeBlocks = document.querySelectorAll('.code-editor');
        console.log('Found', codeBlocks.length, 'code blocks');
        codeBlocks.forEach((block, index) => {
            console.log('Initializing block', index);
            this.initLanguageSelector(block);
        });
    }
};

// Auto-initialize when DOM is ready
function initConverter() {
    console.log('DOM loaded, initializing code converter...');
    codeConverter.initAllCodeBlocks();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initConverter);
} else {
    initConverter();
}

// Also initialize after a short delay to ensure everything is loaded
setTimeout(() => {
    console.log('Delayed initialization check...');
    codeConverter.initAllCodeBlocks();
}, 1000);
