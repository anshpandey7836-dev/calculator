# Calculator 3-Input Field Integration Plan

## 1. Information Gathered
- **index.html**: Existing split display with IDs 'firstNumber', 'opreator', 'secondNumber' (close to new 'first-number', 'operator', 'second-number'). Has .value for result, buttons with old onclick like opreator('C'), numbers(N). Has footer.
- **style.css**: Dark theme (#1a1f2e bg, #252c3d container), orange operators (#f8a920), blue numbers, green equal. Button heights 62px, shadows. .body class on body.
- **script.js**: Empty.
- New code provides: 3-field display + result, specific JS logic for first/second num toggle, operators + ^ % / * - +, clear/backspace/sign/calc.
- Minimal changes needed: Update HTML onclick/ID/classes, replace .value with part4 result input, inject new JS.

## 2. Plan
**index.html**:
- Rename IDs: firstNumber->first-number, opreator->operator, secondNumber->second-number for JS match.
- Add onclick='changeField('1')' to first-number, '2' to second-number.
- Replace <div class="value" id="output"> with <input type="text" class="display part4" id="result" readonly style="width:17rem"> inside new display-container div.
- Update all button onclick to match new JS: e.g. C->allclear(), ⌫->clearOne(), √/x²->handle or remove if not in new JS, ÷->addOperator('/'), ×->'*', -/+/%/^ same.
- Move script src to <head> with defer, or keep at bottom.
- Keep container/body/footer.

**style.css**:
- Rename .container -> .calculator if changing HTML class, but keep .container to minimize change.
- Update .display-container: Add second for result.
- .value -> remove/replace with .part4 styles.
- Buttons: Adjust heights/gaps to match new grid (5 rows? New has row6 =), merge hover/active.
- Keep existing colors/theme.

**script.js**:
- Paste new JS code entirely (DOM ready with defer).
- Adapt ID selectors if keeping old IDs.

## 3. Dependent Files to be Edited
- index.html
- style.css  
- script.js (new content)

## 4. Followup Steps
1. Edit files per plan.
2. Test: execute_command 'google-chrome index.html' or similar to preview.
3. Update TODO.md with progress.
4. attempt_completion.

**Ready to proceed? Confirm or suggest changes.**

