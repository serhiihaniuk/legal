# Geist

`geist-variable.woff2` contains the complete normal variable font, version 1.800, weights 100 through 900. Latin, Polish, Ukrainian and punctuation load as one face to avoid a mixed-font baseline during initial rendering.

Source: [Google Fonts Geist](https://github.com/google/fonts/tree/718e1db4deb9e4d9d85a0ead1b9f5fde2761ccfd/ofl/geist), `Geist[wght].ttf`. The accompanying `OFL.txt` retains the SIL Open Font License and attribution.

Converted without subsetting using fontTools 4.64.0 and Brotli 1.2.0:

```python
from fontTools.ttLib import TTFont

font = TTFont("Geist[wght].ttf")
font.flavor = "woff2"
font.save("geist-variable.woff2")
```
