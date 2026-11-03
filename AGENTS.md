<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All ministry content (copy, links, photos, team, resources, events) lives in `src/content/site.ts`; pages read from it so facts stay editable in one place.
- Photos are hotlinked from the ministry's existing Squarespace CDN via `img()`; never invent ministry facts, people, or dates.
