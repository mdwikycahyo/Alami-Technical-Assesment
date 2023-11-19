import {
  Link
} from "/build/_shared/chunk-64UX4JBJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-X6MWOLIK.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// public/image/wa-chatbot-system-design.png
var wa_chatbot_system_design_default = "/build/_assets/wa-chatbot-system-design-UHRBM3B3.png";

// public/image/chatbot-demo.webm
var chatbot_demo_default = "/build/_assets/chatbot-demo-7HWZBNLQ.webm";

// app/routes/project.wa-chatbot.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/project.wa-chatbot.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/project.wa-chatbot.jsx"
  );
  import.meta.hot.lastModified = "1700388110933.7861";
}
function WAChatbot() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "container", className: "flex-1 overflow-y-auto my-20", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1/4 mb-10 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "flex items-center justify-center cursor-pointer hover:font-bold", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "bi bi-arrow-left text-yellow-500 text-3xl" }, void 0, false, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 29,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" }, void 0, false, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "-ml-[25px] mr-2 font-mono", children: "Back to Home" }, void 0, false, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/project.wa-chatbot.jsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/project.wa-chatbot.jsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "project-detail", className: "mx-36", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-10 font-[Helvetica Neue] font-normal antialiased text-xl", children: "Imagine being able to pay your bills without the need for a separate app, saving your phone's storage space. Users can handle the entire process within the familiar environment of WhatsApp, a platform everyone uses nowadays." }, void 0, false, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-10 font-[Helvetica Neue] font-normal antialiased text-xl mt-5", children: "To make this possible, I\u2019ve streamlined the process. I\u2019ve registered a dedicated WhatsApp number that acts as our chatbot. All you have to do is send specific message to this number, and our chatbot will respond promptly, guiding you through the payment process step by step. The WhatsApp chatbot instantly provides you with the payment details, including the amount due and a unique transaction number. No more navigating through complex interfaces or downloading multiple apps\u2014everything you need is just a WhatsApp message away." }, void 0, false, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center flex-col my-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: wa_chatbot_system_design_default, className: "w-[680px] border-2 border-black-300 p-10", alt: "System Design" }, void 0, false, {
          fileName: "app/routes/project.wa-chatbot.jsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-extralight m-auto", children: "The System Design" }, void 0, false, {
          fileName: "app/routes/project.wa-chatbot.jsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-10 font-[Helvetica Neue] font-normal antialiased text-xl", children: "Behind the scenes, I\u2019ve built the software logic using Node.js. For secure and reliable hosting, we've deployed our web server on DigitalOcean Droplets, offering a secure HTTPS connection for seamless communication with WhatsApp's Webhook services. To generate transaction tickets and facilitate payments, we've established a secure connection to our client's RPC (Remote Procedure Call) system through a VPN (Virtual Private Network). With the expertise of our client's networking team, we've seamlessly integrated our cloud web server with their RPC, enabling quick and secure transactions." }, void 0, false, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "leading-10 font-[Helvetica Neue] font-normal antialiased text-xl mt-5", children: "See the chatbot in operation by viewing the video clip below." }, void 0, false, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center flex-col my-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { width: "280", controls: true, preload: "metadata", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("source", { src: chatbot_demo_default, type: "video/webm" }, void 0, false, {
            fileName: "app/routes/project.wa-chatbot.jsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          "Your browser does not support the video tag."
        ] }, void 0, true, {
          fileName: "app/routes/project.wa-chatbot.jsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-extralight m-auto", children: "Chatbot Demo" }, void 0, false, {
          fileName: "app/routes/project.wa-chatbot.jsx",
          lineNumber: 75,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/project.wa-chatbot.jsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/project.wa-chatbot.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/project.wa-chatbot.jsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/project.wa-chatbot.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = WAChatbot;
var _c;
$RefreshReg$(_c, "WAChatbot");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  WAChatbot as default
};
//# sourceMappingURL=/build/routes/project.wa-chatbot-QSCWW7CK.js.map
