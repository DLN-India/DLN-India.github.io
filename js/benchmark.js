(function () {
    const OUTPUT_FILES = {
        html: 'output.html',
        svg: 'output.svg'
    };

    const STYLE_DETAILS = {
        'style-1': {
            title: 'Carving with Stone',
            description:
                'A subtractive, precision-first approach. The prompt defines the final form upfront — ' +
                'fixed schema, explicit constraints, and exact output structure — and the model works ' +
                'toward that shape with minimal room to reinterpret. Like a sculptor removing material ' +
                'from marble, every instruction narrows the outcome.',
            traits: [
                'Rigid output format specified before generation',
                'Strict field names, layout rules, and validation constraints',
                'Fewer degrees of freedom; less interpretation by the model',
                'Best when correctness and repeatability matter more than exploration'
            ]
        },
        'style-2': {
            title: 'Carving with Clay',
            description:
                'An additive, iterative approach. The prompt sets direction and context but leaves space ' +
                'for the model to explore, reshape, and build up the response. Like molding clay, you ' +
                'provide intent and constraints loosely — then refine through successive passes rather ' +
                'than locking every detail in advance.',
            traits: [
                'Open-ended instructions with room for creative interpretation',
                'Context-rich prompts that invite the model to propose structure',
                'More flexible output; shape emerges through iteration',
                'Best when exploration, nuance, and adaptability are valued'
            ]
        }
    };

    let activeStyle = 'style-1';

    function assetPath(model, style, type) {
        return `benchmark/${model}/${style}/${OUTPUT_FILES[type]}`;
    }

    function setFrameSource(iframe, src) {
        iframe.src = src;
        iframe.dataset.loaded = 'true';
    }

    function setSvgSource(objectEl, imgFallback, src) {
        objectEl.data = src;
        imgFallback.src = src;
        objectEl.dataset.loaded = 'true';
    }

    function loadOutputs(style) {
        document.querySelectorAll('.benchmark-frame').forEach(function (iframe) {
            const model = iframe.dataset.model;
            setFrameSource(iframe, assetPath(model, style, 'html'));
        });

        document.querySelectorAll('.benchmark-svg').forEach(function (objectEl) {
            const model = objectEl.dataset.model;
            const imgFallback = objectEl.querySelector('.benchmark-svg-fallback');
            setSvgSource(objectEl, imgFallback, assetPath(model, style, 'svg'));
        });
    }

    function updateStyleDetail(style) {
        const detail = STYLE_DETAILS[style];
        const titleEl = document.getElementById('benchmarkStyleTitle');
        const descEl = document.getElementById('benchmarkStyleDescription');
        const traitsEl = document.getElementById('benchmarkStyleTraits');

        if (!detail || !titleEl || !descEl || !traitsEl) {
            return;
        }

        titleEl.textContent = detail.title;
        descEl.textContent = detail.description;
        traitsEl.innerHTML = detail.traits
            .map(function (trait) {
                return '<li>' + trait + '</li>';
            })
            .join('');
    }

    function activateTab(tab) {
        document.querySelectorAll('.benchmark-tab').forEach(function (button) {
            const isActive = button === tab;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    }

    function selectStyle(style, tab) {
        activeStyle = style;
        activateTab(tab);
        updateStyleDetail(style);
        loadOutputs(style);
    }

    document.querySelectorAll('.benchmark-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            selectStyle(tab.dataset.style, tab);
        });
    });

    updateStyleDetail(activeStyle);
    loadOutputs(activeStyle);
})();
