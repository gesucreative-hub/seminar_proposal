const fs = require('fs');
const path = require('path');

const slidesDir = path.join(__dirname, 'src', 'slides');
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(slidesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to remove the BAB badge (various formats, multi-line or single-line)
  // The badge usually starts with <span style={{ background: '#dedaf9'
  // and ends with </span>
  const badgeRegex = /<span\s+style=\{\{\s*background:\s*['"]#dedaf9['"][^>]*>\s*(?:BAB\s+[IVX]+(?:\s*·\s*[^<]*)?|Ringkasan\s+Eksekutif)\s*<\/span>\s*/g;
  
  // Also sometimes the <span> doesn't have background inline in the same exact format. Let's make it more resilient.
  // Actually, since they all use `#dedaf9` for the BAB badges:
  const badgeRegex2 = /<span [^>]*background:\s*['"]#dedaf9['"][^>]*>[\s\S]*?<\/span>/g;

  // For the subtitle: <p className="body-small" style={{ color: '#908f92' ... > ... </p>
  // Be careful not to remove other body-small paragraphs if they exist, but generally this specific subtitle follows the title.
  // We can target: <p className="body-small" style={{ color: '#908f92'[^>]*>[\s\S]*?<\/p>
  // Let's only remove the one right after the title div.
  
  // A safer approach: I will log matches to make sure they are correct.
  let matchesBadge = content.match(badgeRegex2);
  let matchesSub = content.match(/<p className="body-small" style=\{\{\s*color:\s*'#908f92'[^>]*>[\s\S]*?<\/p>\s*/g);
  
  if (matchesBadge || matchesSub) {
    console.log(`\n--- ${file} ---`);
    if (matchesBadge) matchesBadge.forEach(m => console.log('BADGE:', m.trim()));
    // For subtitles, some slides might have multiple body-small paragraphs. We ONLY want to remove the subtitle in the header.
    // The subtitle in the header always contains the descriptive text under the title.
    // So let's look at what we're matching.
    if (matchesSub) matchesSub.forEach(m => console.log('SUB:', m.trim()));
  }
}
