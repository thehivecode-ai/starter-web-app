# My hive app

Started from [The Hive Code](https://thehivecode.ai)'s starter template: a small web app,
ready for the hive to help you shape it. Change this README to say what your app does.

## 1. Make it yours

- Change the words on the home page in `app/page.tsx`.
- Fill in the lines at the top of `HIVE.md`: what it is, who it's for, and the problem it
  solves. Delete the `#` at the start of each line you fill in.

## 2. List it on The Hive Code

1. Open [thehivecode.ai/submit](https://thehivecode.ai/submit) and click **Connect GitHub**
   (or **Refresh my repos** if you connected before).
2. Pick this repo and list it. HIVE.md fills in your project page.

People can then try it, star it, and suggest what to build next.

## 3. Put it online (free to start)

1. Open [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import this repo and click **Deploy**. Vercel gives you a link like
   `my-hive-app.vercel.app`, and updates it every time you merge a change.
3. Add that link as the live demo on your project page, so people can try it in one click.

## 4. Turn on your coding agent (optional)

When you send a suggestion to build on The Hive Code, it arrives here as an issue labelled
`hive:approved`. The workflow in `.github/workflows/hive-builds.yml` lets Claude build it on a
branch and open a pull request. You review it and merge it. Nothing merges by itself.

1. Install the [Claude GitHub app](https://github.com/apps/claude) on this repo.
2. Get an API key from the [Anthropic Console](https://console.anthropic.com).
3. In this repo on GitHub, open **Settings**, then **Secrets and variables**, then
   **Actions**, and click **New repository secret**. Name it `ANTHROPIC_API_KEY` and paste
   your key.
4. On [thehivecode.ai/connect](https://thehivecode.ai/connect), under **Your coding agent**,
   click **Check my repo**.

Until you add the key, the workflow does nothing. If you change your project's label on The
Hive Code, change `hive:approved` in the workflow file to match.

## Every pull request is checked

`.github/workflows/build-check.yml` builds the app on every pull request, so you see a green
check before you merge a change from anyone, person or agent.

## Run it on your computer

You need [Node.js](https://nodejs.org) 24.

```bash
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000).

## License

MIT. Use it for anything.
