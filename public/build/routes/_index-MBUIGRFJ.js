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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.jsx
var import_react2 = __toESM(require_react(), 1);

// app/components/Navbar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navbar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navbar.jsx"
  );
  import.meta.hot.lastModified = "1700376965955.043";
}
var Navbar = (props) => {
  const {
    selectedNav,
    onChangeNav
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { id: "navbar", className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex space-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => onChangeNav("home"), className: `font-roboto mx-8 text-2xl relative group ${selectedNav === "home" ? "font-bold" : "hover:font-bold"} duration-300 cursor-pointer`, children: [
      "HOME",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${selectedNav === "home" ? "border-yellow-500" : "group-hover:border-yellow-500"} group-hover:border-yellow-500 transition-all duration-300` }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => onChangeNav("projects"), className: `font-roboto mx-8 text-2xl relative group ${selectedNav === "projects" ? "font-bold" : "hover:font-bold"}  duration-300 cursor-pointer`, children: [
      "PROJECTS",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${selectedNav === "projects" ? "border-yellow-500" : "group-hover:border-yellow-500"}  transition-all duration-300` }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 35,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => onChangeNav("articles"), className: `font-roboto mx-8 text-2xl relative group ${selectedNav === "articles" ? "font-bold" : "hover:font-bold"}  duration-300 cursor-pointer`, children: [
      "ARTICLES",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${selectedNav === "articles" ? "border-yellow-500" : "group-hover:border-yellow-500"}  transition-all duration-300` }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 41,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { onClick: () => onChangeNav("contact"), className: `font-roboto mx-8 text-2xl relative group ${selectedNav === "contact" ? "font-bold" : "hover:font-bold"}  duration-300 cursor-pointer`, children: [
      "CONTACT",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `absolute inset-x-0 bottom-0 h-1 bg-transparent border-b-2 ${selectedNav === "contact" ? "border-yellow-500" : "group-hover:border-yellow-500"}  transition-all duration-300` }, void 0, false, {
        fileName: "app/components/Navbar.jsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = Navbar;
var Navbar_default = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Home.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Home.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Home.jsx"
  );
  import.meta.hot.lastModified = "1700377582298.9326";
}
var Home = (props) => {
  const {
    data
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-6xl font-bold leading-normal font-mono", children: [
      "Hi, I'm ",
      data.username,
      "!"
    ] }, void 0, true, {
      fileName: "app/components/Home.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "leading-10 text-xl", dangerouslySetInnerHTML: {
      __html: data.summary
    } }, void 0, false, {
      fileName: "app/components/Home.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer", onClick: () => window.open(data.linkedin, "_blank") }, void 0, false, {
        fileName: "app/components/Home.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5", onClick: () => window.open(data.github, "_blank") }, void 0, false, {
        fileName: "app/components/Home.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer", onClick: () => window.open(data.medium, "_blank") }, void 0, false, {
        fileName: "app/components/Home.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Home.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Home.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c2 = Home;
var Home_default = Home;
var _c2;
$RefreshReg$(_c2, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Project.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Project.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Project.jsx"
  );
  import.meta.hot.lastModified = "1700386121832.5579";
}
var Project = (props) => {
  const {
    data
  } = props;
  return data.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between my-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-10/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-36 h-0.5 bg-black" }, void 0, false, {
          fileName: "app/components/Project.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-xl mx-6 font-mono", children: project.year }, void 0, false, {
          fileName: "app/components/Project.jsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-3xl font-bold font-mono", children: project.name }, void 0, false, {
          fileName: "app/components/Project.jsx",
          lineNumber: 31,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "leading-10 font-[Helvetica Neue] font-normal antialiased text-xl", children: project.description }, void 0, false, {
          fileName: "app/components/Project.jsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "leading-10 text-lg font-extralight", children: project.techStacks }, void 0, false, {
          fileName: "app/components/Project.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Project.jsx",
        lineNumber: 34,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Project.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-1/4 flex items-center justify-center", children: project.name === "WhatsApp Chatbot" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { className: "flex items-center justify-center cursor-pointer hover:font-bold", to: "/project/wa-chatbot", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" }, void 0, false, {
        fileName: "app/components/Project.jsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "-ml-[25px] mr-2 font-mono", children: "View Details" }, void 0, false, {
        fileName: "app/components/Project.jsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "bi bi-arrow-right text-yellow-500 text-3xl" }, void 0, false, {
        fileName: "app/components/Project.jsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.jsx",
      lineNumber: 45,
      columnNumber: 48
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-center cursor-pointer hover:font-bold", onClick: () => {
      window.open(project.url, "_blank");
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" }, void 0, false, {
        fileName: "app/components/Project.jsx",
        lineNumber: 52,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "-ml-[25px] mr-2 font-mono", children: "Visit Website" }, void 0, false, {
        fileName: "app/components/Project.jsx",
        lineNumber: 53,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "bi bi-arrow-right text-yellow-500 text-3xl" }, void 0, false, {
        fileName: "app/components/Project.jsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Project.jsx",
      lineNumber: 49,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/Project.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, index, true, {
    fileName: "app/components/Project.jsx",
    lineNumber: 26,
    columnNumber: 48
  }, this));
};
_c3 = Project;
var Project_default = Project;
var _c3;
$RefreshReg$(_c3, "Project");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Article.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Article.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Article.jsx"
  );
  import.meta.hot.lastModified = "1700378247467.7869";
}
var Article = (props) => {
  const {
    data
  } = props;
  return data.articles.map((article, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between my-14", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-10/12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-36 h-0.5 bg-black" }, void 0, false, {
          fileName: "app/components/Article.jsx",
          lineNumber: 28,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-xl mx-6 font-mono", children: article.date }, void 0, false, {
          fileName: "app/components/Article.jsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Article.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "ml-[167px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-3xl leading-relaxed font-bold font-mono", children: article.name }, void 0, false, {
          fileName: "app/components/Article.jsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "leading-10 font-[Helvetica Neue] font-normal antialiased text-xl", children: article.description }, void 0, false, {
          fileName: "app/components/Article.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Article.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Article.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Article.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-1/4 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center justify-center cursor-pointer hover:font-bold", onClick: () => {
      window.open(article.url, "_blank");
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-[#D9D9D9] rounded-full w-[50px] h-[50px]" }, void 0, false, {
        fileName: "app/components/Article.jsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "-ml-[25px] mr-2 font-mono", children: "Read More" }, void 0, false, {
        fileName: "app/components/Article.jsx",
        lineNumber: 47,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "bi bi-arrow-right text-yellow-500 text-3xl" }, void 0, false, {
        fileName: "app/components/Article.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Article.jsx",
      lineNumber: 43,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Article.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this)
  ] }, index, true, {
    fileName: "app/components/Article.jsx",
    lineNumber: 25,
    columnNumber: 48
  }, this));
};
_c4 = Article;
var Article_default = Article;
var _c4;
$RefreshReg$(_c4, "Article");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Contact.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Contact.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Contact.jsx"
  );
  import.meta.hot.lastModified = "1700377966402.061";
}
var Contact = (props) => {
  const {
    data
  } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-6xl mt-14 font-bold leading-normal", children: "Let's Work Together" }, void 0, false, {
      fileName: "app/components/Contact.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "leading-10 text-xl mb-14", dangerouslySetInnerHTML: {
      __html: data.closingStatement
    } }, void 0, false, {
      fileName: "app/components/Contact.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "w-1/4 flex items-center justify-center mb-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-center cursor-pointer hover:font-bold", onClick: () => {
      const emailAddress = data.email;
      const subject = "Hello";
      const body = "I hope this email finds you well.";
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-[#363636] rounded-full w-[50px] h-[50px]" }, void 0, false, {
        fileName: "app/components/Contact.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "-ml-[25px] mr-2 font-mono", children: "Say Hello!" }, void 0, false, {
        fileName: "app/components/Contact.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "bi bi-arrow-right text-yellow-500 text-3xl" }, void 0, false, {
        fileName: "app/components/Contact.jsx",
        lineNumber: 41,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Contact.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Contact.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-4 flex items-center my-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "\xA9 2023 Muhammad Dwiky Cahyo Wicaksono" }, void 0, false, {
        fileName: "app/components/Contact.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mx-20", children: "|" }, void 0, false, {
        fileName: "app/components/Contact.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "bi bi-linkedin text-3xl hover:text-4xl duration-300 cursor-pointer mr-5", onClick: () => window.open(data.linkedin, "_blank") }, void 0, false, {
          fileName: "app/components/Contact.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "bi bi-github text-3xl hover:text-4xl duration-300 cursor-pointer mx-5", onClick: () => window.open(data.github, "_blank") }, void 0, false, {
          fileName: "app/components/Contact.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "bi bi-instagram text-3xl hover:text-4xl duration-300 cursor-pointer mx-5", onClick: () => window.open(data.instagram, "_blank") }, void 0, false, {
          fileName: "app/components/Contact.jsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "bi bi-medium text-3xl hover:text-4xl duration-300 cursor-pointer mx-5", onClick: () => window.open(data.medium, "_blank") }, void 0, false, {
          fileName: "app/components/Contact.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "bi bi-envelope-fill text-3xl hover:text-4xl duration-300 cursor-pointer mx-5", onClick: () => {
          const emailAddress = data.email;
          const subject = "Hello";
          const body = "I hope this email finds you well.";
          window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        } }, void 0, false, {
          fileName: "app/components/Contact.jsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Contact.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Contact.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Contact.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c5 = Contact;
var Contact_default = Contact;
var _c5;
$RefreshReg$(_c5, "Contact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// data.json
var data_default = {
  username: "Dwiky",
  summary: "a <strong>Software Developer</strong> from Indonesia <br /> By day, I'm working as a <strong>Frontend Developer</strong>, but my curiosity for software development goes far beyond",
  linkedin: "https://www.linkedin.com/in/mdwikycahyow/",
  github: "https://github.com/mdwikycahyo",
  medium: "https://medium.com/@mdwikycahyo",
  instagram: "https://www.instagram.com/mdwikycahyo_/",
  email: "mdwikycahyo@gmail.com",
  whatsapp: "https://wa.me/6282164957664",
  projects: [
    {
      name: "WhatsApp Chatbot",
      year: 2023,
      description: "This chatbot helps merchants easily top up their account balance using WhatsApp. They can use the balance to assist users in paying electricity bills, fiber optic bills, and other household transactions. The chatbot automatically responds to WhatsApp messages, making it convenient for merchants without the need for a separate app.",
      techStacks: "NodeJs, DigitalOcean, Whatsapp Webhook",
      url: "/project/wa-chatbot"
    },
    {
      name: "Amazon Clone",
      year: 2021,
      description: "Using Fake Store 3rd Party API to clone Amazon.com e-commerce web",
      techStacks: "React, Redux, Firebase",
      url: "https://clone-58f35.web.app/"
    },
    {
      name: "GeeHive",
      year: 2021,
      description: "Gift recommendation app based on user input",
      techStacks: "Vue.js, Vuex, Express, PosgreSQL, Firebase, Heroku",
      url: "https://geehive.web.app/"
    }
  ],
  articles: [
    {
      name: "Measuring Engineer\u2019s Productivity (?)",
      date: "Oct 7, 2023",
      description: "This article discusses McKinsey's approach to measuring developer productivity, which has prompted responses from software development elites to share their valuable perspective",
      url: "https://medium.com/@mdwikycahyo/measuring-engineers-productivity-0098feb6dac5"
    },
    {
      name: "How Internet Works",
      date: "Nov 6, 2022",
      description: "In this article, I'm trying to explain how the internet works in an easy-to-understand way, using simple analogy and examples.",
      url: "https://medium.com/@mdwikycahyo/how-internet-works-explained-for-non-technical-person-6febcf99f4b"
    },
    {
      name: "How to set up Svelte using Vite and Tailwind CSS",
      date: "Jul 1, 2022",
      description: "This article provides instructions on configuring Svelte with Vite and Tailwind CSS, gives the readers the first step to play around with those frontend technology",
      url: "https://medium.com/@mdwikycahyo/how-to-set-up-svelte-using-vite-and-tailwind-css-617040ebccec"
    }
  ],
  closingStatement: "I\u2019m available for <strong>Part-Time</strong> and <strong>Freelance work</strong>."
};

// app/routes/_index.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.jsx"
  );
  import.meta.hot.lastModified = "1700384000600.4016";
}
function Root() {
  _s();
  const [selectedNav, setSelectedNav] = (0, import_react2.useState)("home");
  const homeRef = (0, import_react2.useRef)(null);
  const projectsRef = (0, import_react2.useRef)(null);
  const articlesRef = (0, import_react2.useRef)(null);
  const contactRef = (0, import_react2.useRef)(null);
  const onChangeNav = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth"
    });
  };
  (0, import_react2.useEffect)(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };
    const callback = (entries, observer2) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedNav(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (articlesRef.current) {
      observer.observe(articlesRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
      if (articlesRef.current) {
        observer.unobserve(articlesRef.current);
      }
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [selectedNav]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-7 sticky top-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Navbar_default, { selectedNav, onChangeNav }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 90,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { id: "container", className: "flex-1 overflow-y-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: homeRef, id: "home", className: "ml-36 w-3/4 h-full flex items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Home_default, { data: data_default }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: projectsRef, id: "projects", className: "my-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Project_default, { data: data_default }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: articlesRef, id: "articles", className: "my-20 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Article_default, { data: data_default }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 100,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ref: contactRef, id: "contact", className: "mt-20 bg-black text-white item-center flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Contact_default, { data: data_default }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(Root, "VnAhIHIGk7FZ75CLMVt+/EZZXt4=");
_c6 = Root;
var _c6;
$RefreshReg$(_c6, "Root");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Root as default
};
//# sourceMappingURL=/build/routes/_index-MBUIGRFJ.js.map
