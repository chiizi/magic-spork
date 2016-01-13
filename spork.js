var spork = {}
spork.extendor = extA => extB => (Object.keys(extA).forEach(k => extB[k] = extA[k]), extB)
spork.extendee = extB => extA => (Object.keys(extA).forEach(k => extB[k] = extA[k]), extB)
spork.filter = o => t => !!Math.min.apply(this, Object.keys(o).map(k => o[k](t[k])))
spork.is = x => v => v == x
spork.staticize = o => (s => (Object.keys(o).map(k => s[k] = o[k]()), s))({})
spork.destaticize = o => (s => (Object.keys(o).map(k => (v => s[k] = () => v)(o[k])), s))({})
