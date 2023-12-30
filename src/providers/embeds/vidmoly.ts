import { makeEmbed } from '@/providers/base';

export const vidmolyScraper = makeEmbed({
  id: 'vidmoly',
  name: 'vidmoly',
  rank: 180,
  async scrape(ctx) {
    const embed = await ctx.proxiedFetcher<string>(ctx.url);

    const playerSrcRegex = /file:"([^"]+)"/;
    const playerSrc = embed.match(playerSrcRegex) ?? [];

    const streamUrl = playerSrc[1];
    if (!streamUrl) throw new Error('Stream url not found in embed code');

    return {
      stream: [
        {
          id: 'primary',
          type: 'hls',
          flags: [],
          captions: [],
          playlist: streamUrl,
          qualities: {
            unknown: {
              headers: {
                // vidmoly requires this header on all streams
                Referer: 'https://vidmoly.to/',
              },
            },
          },
        },
      ],
    };
  },
});
