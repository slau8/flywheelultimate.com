import { NoteHostSiteConfig, googleTag } from 'notehost'
import { PAGE_SCRIPT_JS_STRING } from './_page-script-js-string'

// Set this to your Google Tag ID from Google Analytics
const GOOGLE_TAG_ID = ''

export const SITE_CONFIG: NoteHostSiteConfig = {
  domain: 'flywheelultimate.com',

  // Metatags, optional
  // For main page link preview
  siteName: 'Flywheel Ultimate',
  siteDescription: 'University of Michigan Women&#39;s + NB Ultimate Frisbee Team',
  siteImage: 'https://flywheelultimate.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F42f7325d-77df-4437-b5e0-dd0c2e222639%2F51f15788-137c-4c26-94c8-635ac9eca2da%2Fflywheel_team_regionals_2024.jpeg?table=block&amp;id=6e026744-cac6-46b8-a712-c3457010dfe7&amp;spaceId=42f7325d-77df-4437-b5e0-dd0c2e222639&amp;width=2000&amp;userId=&amp;cache=v2',

  // Twitter handle, optional
  twitterHandle: 'umichflywheel',

  // URL to custom favicon.ico
  siteIcon: 'https://flywheelultimate.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F42f7325d-77df-4437-b5e0-dd0c2e222639%2Fae3884d3-ad83-4ece-83a7-dbc42a95e26c%2Fflywheel_seal_logo.png?table=block&id=6e026744-cac6-46b8-a712-c3457010dfe7&spaceId=42f7325d-77df-4437-b5e0-dd0c2e222639&width=250&userId=&cache=v2',

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  // notionDomain: 'flywheelultimate.notion.site',

  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
  slugToPage: {
    '': '6e026744cac646b8a712c3457010dfe7',
    // contact: 'NOTION_PAGE_ID',
    // about: 'NOTION_PAGE_ID',
    // // Hint: you can use '/' in slug name to create subpages
    // 'about/people': 'NOTION_PAGE_ID',
  },

  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  // pageMetadata: {
  //   'NOTION_PAGE_ID': {
  //     title: 'My Custom Page Title',
  //     description: 'My custom page description',
  //     image: 'https://imagehosting.com/images/page_preview.jpg',
  //     author: 'My Name',
  //   },
  // },

  // Subdomain redirects are optional
  // But it is recommended to have one for www
  subDomains: {
    www: {
      redirect: 'https://flywheelultimate.com',
    },
  },

  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
  // fof: {
  //   page: "NOTION_PAGE_ID",
  //   slug: "404", // default
  // },

  // Google Font name, you can choose from https://fonts.google.com
  // googleFont: 'Roboto',

  // Custom JS for head and body of a Notion page
  customHeadCSS: ``,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
