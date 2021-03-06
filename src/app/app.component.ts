import { Component, VERSION } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService],
})
export class AppComponent {
  angularVersion = VERSION.full;
  ngxMarkdownVersion = '12.0.1';

  markdown = `## Markdown __rulez__!
---

### Syntax highlight
\`\`\`typescript
const language = 'typescript';
\`\`\`

### Lists
1. Ordered list
2. Another bullet point
   - Unordered list
   - Another unordered bullet

### Blockquote
> Blockquote to the max`;

  res: any;
  loading: any = false;
  selected: any = { markdown: '' };

  constructor(private apiService: ApiService) {}

  async load() {
    this.loading = true;
    this.res = await this.apiService.getData();
    console.log(this.res);
    this.loading = false;
  }

  choose(resit) {
    this.selected = resit;
    console.log(resit);
  }
}
