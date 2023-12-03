# 2048-Vis

## To install:
```bash
npm install
```

## To launch:
```bash
npm run dev
```
And open [http://localhost:5005](http://localhost:5005)

## Goal
In this repo, our goal will be to visualize the whole game on the web page.

From the frontend part, this repo will receive JSON with boards.

## JSON Structure:

```json
        [
          [[128, 2, 2, 0], [0, 0, 4, 0], [0, 2, 8, 0], [0, 32, 16, 0]],
          [[0, 2048, 0, 0], [0, 0, 4, 0], [0, 32, 16, 0], [0, 32, 1024, 0]],
          [[0, 2, 0, 0], [2, 0, 8, 0], [0, 2, 4, 0], [0, 64, 16, 0]]
        ]
```
Each outer array represents one board state.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!