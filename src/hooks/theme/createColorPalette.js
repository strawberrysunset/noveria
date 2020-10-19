import convert from 'color-convert'
export function createColorPalette (neutralShades, colors, targetHue) {
  let palette = {}
  palette['neutral'] = {}
  for (const num in neutralShades) {
    const shadeHSL = convert.hex.hsl(neutralShades[num])
    palette['neutral'][num] = '#' + convert.hsl.hex([targetHue, targetHue ? 15 : 0, shadeHSL[2]])
  }
  for (const color in colors) {
    const hsl = convert.hex.hsl(colors[color])
    palette[color] = {}
    palette[color][100] = '#' + convert.hsl.hex([hsl[0] + (0.1 * (targetHue - hsl[0])), hsl[1], hsl[2]])
  }
  return palette;
}