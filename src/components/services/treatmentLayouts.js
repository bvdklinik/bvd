/**
 * Layout direction for the treatment pages. The words live in treatments.js;
 * this file only decides how each page is composed, so they read as art-directed
 * pages rather than one template with different copy.
 *
 * heroTone      the light the banner sits in
 * overviewStyle "split" (photograph beside the copy) or "band" (full-width image)
 * mediaSide     which side the photograph takes in the split sections
 * galleryStyle  "mosaic" (one large tile, two stacked) or "strip" (three equal)
 * gallerySide   which side the large tile sits on in the mosaic
 * bandTone      the colour of the closing appointment band
 */
const LAYOUTS = {
  "dental-veneers": {
    heroTone: "warm",
    overviewStyle: "split",
    mediaSide: "right",
    galleryStyle: "mosaic",
    gallerySide: "left",
    bandTone: "blue",
  },
  "dental-crowns": {
    heroTone: "cool",
    overviewStyle: "band",
    mediaSide: "left",
    galleryStyle: "strip",
    gallerySide: "right",
    bandTone: "ink",
  },
  "dental-implants": {
    heroTone: "deep",
    overviewStyle: "split",
    mediaSide: "left",
    galleryStyle: "mosaic",
    gallerySide: "right",
    bandTone: "blue",
  },
  "teeth-whitening": {
    heroTone: "warm",
    overviewStyle: "band",
    mediaSide: "right",
    galleryStyle: "strip",
    gallerySide: "left",
    bandTone: "ink",
  },
  invisalign: {
    heroTone: "cool",
    overviewStyle: "split",
    mediaSide: "right",
    galleryStyle: "strip",
    gallerySide: "left",
    bandTone: "blue",
  },
  "teeth-extraction": {
    heroTone: "deep",
    overviewStyle: "band",
    mediaSide: "left",
    galleryStyle: "mosaic",
    gallerySide: "right",
    bandTone: "ink",
  },
};

const DEFAULT_LAYOUT = {
  heroTone: "cool",
  overviewStyle: "split",
  mediaSide: "right",
  galleryStyle: "mosaic",
  gallerySide: "left",
  bandTone: "blue",
};

export const getTreatmentLayout = (slug) => LAYOUTS[slug] ?? DEFAULT_LAYOUT;