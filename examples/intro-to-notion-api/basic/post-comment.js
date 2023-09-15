import { Client } from "@notionhq/client"
import { config } from "dotenv"

config()

const pageId = "bbb69ca80285483ea9e37100fd4de99d"
const apiKey = "secret_93JFXrkeqpyllXKvDPr8JbX1of81NOzTsqgmTycz5Ed"
const discussionId = "a4d0cdd61d694fa38aa7156ded57095b#a867614da3aa4a299757c43308cec49e"

const notion = new Client({ auth: apiKey })

async function addBlock() {
    const newHeadingResponse = await notion.blocks.children.append({
        block_id: pageId,
        // Pass an array of blocks to append to the page: https://developers.notion.com/reference/block#block-type-objects
        children: [
            {
            heading_2: {
                rich_text: [
                {
                    text: {
                    content: "HEADER TO PUT COMMENTS IN", // This is the text that will be displayed in Notion
                    },
                },
                ],
            },
            },
        ],
    })
    console.log(newHeadingResponse)
}

async function listBlocks() {
    const response = await notion.blocks.children.list({
        block_id: pageId,
    })
    console.log(response)
}

async function main() {
    // listBlocks();
    const commentResponse = await notion.comments.create({
        "discussion_id": "b6695f182dce41848c56f52449db0f32",
        "rich_text": [
            {
                "text": {
                "content": "Hello world"
                }
            }
        ]
	})
    console.log(commentResponse)

//   // Print the new block(s) response
//   console.log(newHeadingResponse)
}

main()
