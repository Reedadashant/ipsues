return `${item}${type && type !== '*' ? `&&${item}.mark.marktype==='${type}'` : ''}${role ? `&&${item}.mark.role==='${role}'` : ''}${name ? `&&${item}.mark.name==='${name}'` : ''}`;
