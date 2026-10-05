# anujaperera.ca

My personal portfolio website: [www.anujaperera.ca](https://www.anujaperera.ca)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/page.tsx` – all page content (experience, leadership, projects)
- `components/` – experience/project cards, skills, about section, theme switch
- `config/site.ts` – site name, URL, and description used for metadata
- `public/` – images and `Anuja_Perera_Resume.pdf`

## Updating the Resume

Replace `public/AnujaPereraResume.pdf` with the new PDF (keep the same file name).

## License

[MIT](LICENSE)
