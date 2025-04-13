"use strict";(self.webpackChunkgoose=self.webpackChunkgoose||[]).push([[6761],{3147:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var i=o(5571),n=o(4848),s=o(8453);const l={title:"Finetuning Toolshim Models for Tool Calling",description:"Addressing performance limitations in models without native tool calling support",authors:["alice","mic"]},a=void 0,r={authorsImageUrls:[void 0,void 0]},c=[{value:"Why tool calling is important",id:"why-tool-calling-is-important",level:2},{value:"Background: using a local model as a &quot;toolshim&quot;",id:"background-using-a-local-model-as-a-toolshim",level:2},{value:"Proposal: Fine-tune a lightweight toolshim model (up to 12b)",id:"proposal-fine-tune-a-lightweight-toolshim-model-up-to-12b",level:2},{value:"Key Observations on Current Challenges with Tool Call Generation",id:"key-observations-on-current-challenges-with-tool-call-generation",level:2},{value:"Some examples of model-specific quirks wrt tool calling:",id:"some-examples-of-model-specific-quirks-wrt-tool-calling",level:3},{value:"Experimentation Approach",id:"experimentation-approach",level:2},{value:"Data Collection",id:"data-collection",level:3},{value:"Modeling",id:"modeling",level:3},{value:"Evaluations",id:"evaluations",level:3},{value:"Future approaches",id:"future-approaches",level:2}];function h(e){const t={a:"a",br:"br",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components},{Head:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"blog cover",src:o(1905).A+"",width:"1200",height:"630"})}),"\n",(0,n.jsxs)(t.p,{children:["Our recently published ",(0,n.jsx)(t.a,{href:"https://block.github.io/goose/blog/2025/03/31/goose-benchmark",children:"Goose benchmark"})," revealed significant performance limitations in models where tool calling is not straightforwardly supported (e.g., Gemma3, Deepseek-r1, phi4). These models often fail to invoke tools at appropriate times or produce malformed or inconsistently formatted tool calls. With the most recent releases of Llama4 and Deepseek v3 (0324), we are again observing challenges with effective tool calling performance, even on these flagship openweight models."]}),"\n",(0,n.jsx)(t.h2,{id:"why-tool-calling-is-important",children:"Why tool calling is important"}),"\n",(0,n.jsx)(t.p,{children:"Tool calling is a critical capability for agents like goose. It allows models to go beyond text and image generation and take concrete actions, such as executing code, querying databases, searching the web, or interacting with design tools like Figma. Equipping agents with a broad set of tools empowers them to discover and interface with external systems, much like a human would. While this might be overkill for narrow, more deterministic applications of LLMs, it is essential for general-purpose agents like goose. Without reliable tool calling, we limit what models can do to help us automate, remove toil and navigate complex systems. Pure generation\u2013of text, images, speech, and video\u2013is just the first step on the path to more powerful agentic capabilities. There is so much more that models can do if we give them the legs to run."}),"\n",(0,n.jsx)(t.h2,{id:"background-using-a-local-model-as-a-toolshim",children:'Background: using a local model as a "toolshim"'}),"\n",(0,n.jsxs)(t.p,{children:['The goal is to allow goose to work with the widest variety of models possible. A "toolshim" in this case is a thin layer which sits between the main model doing the agent work, and the tools that can perform actual actions (making the agent take action, vs being a chatbot). Previously we have been trying this approach with open models including in this ',(0,n.jsx)(t.a,{href:"https://block.github.io/goose/blog/2025/03/31/goose-benchmark",children:"past benchmark"})," post. A toolshim, if it can work, unlocks both powerful cutting edge models (open weight and closed) which while may perform well on various benchmarks, fall well short when tool calling for agents is required (or perhaps don't, by design, support tool calling at all, such as the case with some reasoning models)."]}),"\n",(0,n.jsx)(t.h2,{id:"proposal-fine-tune-a-lightweight-toolshim-model-up-to-12b",children:"Proposal: Fine-tune a lightweight toolshim model (up to 12b)"}),"\n",(0,n.jsx)(t.p,{children:"Develop a dedicated toolshim model that translates open-source model outputs into well-structured tool calls, acting as a reliable post-processor to standardize across model families trained that currently exhibit inconsistent and unreliable tool call generation behavior. We do not use tool calling apis even if available, but provide tool context in the system prompts."}),"\n",(0,n.jsxs)(t.p,{children:["We already experimented with this in the ",(0,n.jsx)(t.a,{href:"https://block.github.io/goose/blog/2025/03/31/goose-benchmark",children:"benchmarking effort"}),", finding that phi4 (14b) and gemma3 (27b) achieved close performance to llama3.3 (70b) when used with a generic local model (mistral-nemo) as the shim. This shows potential for furthering their performance with more focused attention on improving the shim's performance."]}),"\n",(0,n.jsx)(t.p,{children:"Toolshim System Sketch:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Toolshim System Sketch",src:o(954).A+"",width:"1132",height:"828"})}),"\n",(0,n.jsx)(t.h2,{id:"key-observations-on-current-challenges-with-tool-call-generation",children:"Key Observations on Current Challenges with Tool Call Generation"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Model training templates are inconsistent"}),(0,n.jsx)(t.br,{}),"\n","For example, ",(0,n.jsx)(t.a,{href:"https://qwen.readthedocs.io/en/latest/framework/function_call.html",children:"Qwen models use"})," ",(0,n.jsx)(t.a,{href:"https://github.com/NousResearch/Hermes-Function-Calling",children:"Hermes-style tool formats"}),", while Openhands generates Markdown despite explicit JSON instructions\u2014suggesting training data shape can have an underestimated impact on reliable tool call generation"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Current workarounds aren't enough"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://docs.vllm.ai/en/latest/features/tool_calling.html",children:"Model providers may implement approaches like guided decoding"})," to guarantee validly-parsable function calls, but these may not produce high-quality outputs if the model wasn't trained on schemas matching what users provide in context. The widespread challenges with tool use with Llama4 may be indicative of the challenges providers have in effectively serving new models to make full use of their capabilities"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Hosting providers vary wildly in how well they work with tool calls"}),(0,n.jsx)(t.br,{}),"\n","Hosting providers helpfully provide chat templates or similar which can, in many cases, prompt some of the larger models to reply correctly formatted tool calls, and thus can support openai-like apis where tools are provided, but in practice these can fall short after one shot, or vary a lot between providers (an issue exacerbated if using model routers such as openrouter or huggingface hosted inference)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"some-examples-of-model-specific-quirks-wrt-tool-calling",children:"Some examples of model-specific quirks wrt tool calling:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Openhands"}),": Despite instructions to generate JSON-formatted tool calls, still generates markdown (likely due to shape of their training data)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Openhands example",src:o(958).A+"",width:"1287",height:"233"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Llama4 Maverick"}),": Generates malformed tool calls, but performs somewhat better when specifically prompted to generate tool calls as JSON"]}),"\n",(0,n.jsxs)(t.p,{children:['With "tool calls" on OpenRouter:',(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"OpenRouter tool calls example",src:o(2437).A+"",width:"1295",height:"621"})]}),"\n",(0,n.jsxs)(t.p,{children:["Llama4 Maverick when instead just prompted to generate tool calls in JSON:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"Llama4 example",src:o(8439).A+"",width:"1296",height:"767"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Gemma3"}),": A DeepMind engineer ",(0,n.jsx)(t.a,{href:"https://www.philschmid.de/gemma-function-calling",children:"suggested providing a function calling template in-context in Python format"}),(0,n.jsx)(t.br,{}),"\n","The 12B model also outputs valid JSON tool calls reasonably well:",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"Gemma3 example",src:o(9148).A+"",width:"1293",height:"299"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Functionary models"}),": ",(0,n.jsx)(t.a,{href:"https://github.com/MeetKai/functionary/issues/302#issuecomment-2650187280",children:"Ollama couldn't support the tool calling capabilities"})," because these models were trained with prompt templates in a TypeScript schema incompatible with Ollama's supported JSON schema"]}),"\n",(0,n.jsx)(t.h2,{id:"experimentation-approach",children:"Experimentation Approach"}),"\n",(0,n.jsx)(t.h3,{id:"data-collection",children:"Data Collection"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Extract user messages from historical Goose sessions, and for messages followed by tool calls from Anthropic/OpenAI (all tool calls up to today):","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Regenerate tool calls with open models:"})," Regenerate the tool calls with the most capable open models that have supported tool calling capabilities (e.g., QwQ, Qwen, deepseek chat v3)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Generate json/markdown-formatted tool calls to parse:"})," Instruct the most capable open models (e.g., DeepSeek-r1, Llama4, Gemma3), that don't necessarily have strong tool calling to output tool calls in the correct schema (JSON/markdown). Parse the output into the appropriate tool calls."]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Discard any malformed tool calls, tool calls that fail to properly execute, or tool calls that meet other rejection criteria"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Generate a few thousand examples with this approach"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"modeling",children:"Modeling"}),"\n",(0,n.jsx)(t.p,{children:"Fine tune small models like mistral-nemo (14b), gemma 4-12b, qwen2.5-coder 7-14b."}),"\n",(0,n.jsx)(t.h3,{id:"evaluations",children:"Evaluations"}),"\n",(0,n.jsx)(t.p,{children:"Test with Goosebench evals run in the benchmarking blogpost. We can directly compare performance of models with and without the finetuned toolshim models supporting them."}),"\n",(0,n.jsx)(t.h2,{id:"future-approaches",children:"Future approaches"}),"\n",(0,n.jsx)(t.p,{children:"On top of local models, we would like to consider parsers, parser combinators, context-free grammars and more (even very large ones) which are constructed based on 1000s of examples of tool results. Even if large, these can operate at every low latencies extracting parameters for suggested tool calls. There are likely other structured text extraction techniques to be explored to assist with discovery and extraction of tool calls from rich responses from powerful general models."}),"\n",(0,n.jsxs)(i,{children:[(0,n.jsx)("meta",{property:"og:title",content:"Finetuning Toolshim Models for Tool Calling"}),(0,n.jsx)("meta",{property:"og:type",content:"article"}),(0,n.jsx)("meta",{property:"og:url",content:"https://block.github.io/goose/blog/2025/04/11/finetuning-toolshim"}),(0,n.jsx)("meta",{property:"og:description",content:"Addressing performance limitations in models without native tool calling support"}),(0,n.jsx)("meta",{property:"og:image",content:"https://block.github.io/goose/assets/images/toolshim-header-42611f614e7722f90cf83991debe3046.png"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:domain",content:"block.github.io/goose"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Finetuning Toolshim Models for Tool Calling"}),(0,n.jsx)("meta",{name:"twitter:description",content:"Addressing performance limitations in models without native tool calling support"}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://block.github.io/goose/assets/images/toolshim-header-42611f614e7722f90cf83991debe3046.png"})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9148:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/gemma3-eca1a363fea57b818a967883e567a481.png"},8439:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/llama4-2ebc0ab8f18d31c450ee2bf34aa82191.png"},958:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/openhands-7fe1d878c7108c846e6275ed3157be6e.png"},2437:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/openrouter_toolcalls-01ef22c3d91ff5580c49b89f6599293f.png"},954:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/sketch-0bb4b0e6fb7fdbd194fff4db41c3806f.png"},1905:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/toolshim-header-42611f614e7722f90cf83991debe3046.png"},8453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>a});var i=o(6540);const n={},s=i.createContext(n);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(s.Provider,{value:t},e.children)}},5571:e=>{e.exports=JSON.parse('{"permalink":"/goose/blog/2025/04/11/finetuning-toolshim","source":"@site/blog/2025-04-11-finetuning-toolshim/index.md","title":"Finetuning Toolshim Models for Tool Calling","description":"Addressing performance limitations in models without native tool calling support","date":"2025-04-11T00:00:00.000Z","tags":[],"readingTime":5.46,"hasTruncateMarker":true,"authors":[{"name":"Alice Hau","title":"Machine Learning Engineer","page":{"permalink":"/goose/blog/authors/alice"},"socials":{"linkedin":"https://www.linkedin.com/in/alice-hau/","github":"https://github.com/alicehau"},"imageURL":"https://avatars.githubusercontent.com/u/110418948?v=4","key":"alice"},{"name":"Michael Neale","title":"Principal Engineer","page":{"permalink":"/goose/blog/authors/mic"},"socials":{"github":"https://github.com/michaelneale"},"imageURL":"https://avatars.githubusercontent.com/u/14976?v=4","key":"mic"}],"frontMatter":{"title":"Finetuning Toolshim Models for Tool Calling","description":"Addressing performance limitations in models without native tool calling support","authors":["alice","mic"]},"unlisted":false,"nextItem":{"title":"How to Vibe Code Responsibly (with Goose)","permalink":"/goose/blog/2025/04/08/vibe-code-responsibly"}}')}}]);