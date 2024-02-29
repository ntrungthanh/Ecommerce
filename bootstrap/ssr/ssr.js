import { mergeProps, useSSRContext, withCtx, unref, createVNode, renderSlot, ref, createTextVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, computed, Fragment, renderList, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { Link, useForm, Head, router, createInertiaApp } from "@inertiajs/vue3";
import { VApp } from "vuetify/lib/components/VApp/index.mjs";
import { VCard, VCardText, VCardActions, VCardTitle } from "vuetify/lib/components/VCard/index.mjs";
import { VContainer, VRow, VCol, VSpacer } from "vuetify/lib/components/VGrid/index.mjs";
import { VMain } from "vuetify/lib/components/VMain/index.mjs";
import { VBtn } from "vuetify/lib/components/VBtn/index.mjs";
import { VForm } from "vuetify/lib/components/VForm/index.mjs";
import { VTextField } from "vuetify/lib/components/VTextField/index.mjs";
import { VCheckbox } from "vuetify/lib/components/VCheckbox/index.mjs";
import { VIcon } from "vuetify/lib/components/VIcon/index.mjs";
import { VList, VListItem } from "vuetify/lib/components/VList/index.mjs";
import md5 from "crypto-js/md5.js";
import { useToast } from "vue-toastification";
import { VAppBar, VAppBarNavIcon } from "vuetify/lib/components/VAppBar/index.mjs";
import { VDivider } from "vuetify/lib/components/VDivider/index.mjs";
import { VNavigationDrawer } from "vuetify/lib/components/VNavigationDrawer/index.mjs";
import { VToolbarTitle } from "vuetify/lib/components/VToolbar/index.mjs";
import { VBreadcrumbs } from "vuetify/lib/components/VBreadcrumbs/index.mjs";
import { VSelect } from "vuetify/lib/components/VSelect/index.mjs";
import { VTextarea } from "vuetify/lib/components/VTextarea/index.mjs";
import { VDataTableServer } from "vuetify/lib/components/VDataTable/index.mjs";
import { VDialog } from "vuetify/lib/components/VDialog/index.mjs";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$g = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$f = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, mergeProps({ class: "bg-grey-lighten-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, { fluid: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          justify: "center",
                          style: { "height": "100vh" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "10",
                                lg: "3"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="d-flex justify-center"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(Link), {
                                      href: "/",
                                      as: "div"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(ApplicationLogo, { style: { "height": "75" } }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(ApplicationLogo, { style: { "height": "75" } })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                    _push6(ssrRenderComponent(VCard, { class: "px-6 py-4 mt-3 elevation-2 rounded-lg" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push7, _parent7, _scopeId6);
                                        } else {
                                          return [
                                            renderSlot(_ctx.$slots, "default")
                                          ];
                                        }
                                      }),
                                      _: 3
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("div", { class: "d-flex justify-center" }, [
                                        createVNode(unref(Link), {
                                          href: "/",
                                          as: "div"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(ApplicationLogo, { style: { "height": "75" } })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      createVNode(VCard, { class: "px-6 py-4 mt-3 elevation-2 rounded-lg" }, {
                                        default: withCtx(() => [
                                          renderSlot(_ctx.$slots, "default")
                                        ]),
                                        _: 3
                                      })
                                    ];
                                  }
                                }),
                                _: 3
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "10",
                                  lg: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "d-flex justify-center" }, [
                                      createVNode(unref(Link), {
                                        href: "/",
                                        as: "div"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(ApplicationLogo, { style: { "height": "75" } })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(VCard, { class: "px-6 py-4 mt-3 elevation-2 rounded-lg" }, {
                                      default: withCtx(() => [
                                        renderSlot(_ctx.$slots, "default")
                                      ]),
                                      _: 3
                                    })
                                  ]),
                                  _: 3
                                })
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            align: "center",
                            justify: "center",
                            style: { "height": "100vh" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "10",
                                lg: "3"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "d-flex justify-center" }, [
                                    createVNode(unref(Link), {
                                      href: "/",
                                      as: "div"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(ApplicationLogo, { style: { "height": "75" } })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(VCard, { class: "px-6 py-4 mt-3 elevation-2 rounded-lg" }, {
                                    default: withCtx(() => [
                                      renderSlot(_ctx.$slots, "default")
                                    ]),
                                    _: 3
                                  })
                                ]),
                                _: 3
                              })
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, { fluid: "" }, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          justify: "center",
                          style: { "height": "100vh" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "12",
                              md: "10",
                              lg: "3"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "d-flex justify-center" }, [
                                  createVNode(unref(Link), {
                                    href: "/",
                                    as: "div"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(ApplicationLogo, { style: { "height": "75" } })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(VCard, { class: "px-6 py-4 mt-3 elevation-2 rounded-lg" }, {
                                  default: withCtx(() => [
                                    renderSlot(_ctx.$slots, "default")
                                  ]),
                                  _: 3
                                })
                              ]),
                              _: 3
                            })
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, { fluid: "" }, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        align: "center",
                        justify: "center",
                        style: { "height": "100vh" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "12",
                            md: "10",
                            lg: "3"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "d-flex justify-center" }, [
                                createVNode(unref(Link), {
                                  href: "/",
                                  as: "div"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(ApplicationLogo, { style: { "height": "75" } })
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode(VCard, { class: "px-6 py-4 mt-3 elevation-2 rounded-lg" }, {
                                default: withCtx(() => [
                                  renderSlot(_ctx.$slots, "default")
                                ]),
                                _: 3
                              })
                            ]),
                            _: 3
                          })
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const showPassword = ref(false);
    const submit = () => {
      form.post("/confirm-password", {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$f, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, { onSubmit: submit }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle-2 text-medium-emphasis mb-4"${_scopeId2}> This is a secure area of the application. Please confirm your password before continuing. </div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Password",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    loading: unref(form).processing,
                    class: "mt-4",
                    type: "submit",
                    block: "",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Confirm `);
                      } else {
                        return [
                          createTextVNode(" Confirm ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle-2 text-medium-emphasis mb-4" }, " This is a secure area of the application. Please confirm your password before continuing. "),
                    createVNode(VTextField, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      variant: "outlined",
                      density: "compact",
                      placeholder: "Password",
                      "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                      type: showPassword.value ? "text" : "password",
                      "error-messages": unref(form).errors.password,
                      "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                    createVNode(VBtn, {
                      loading: unref(form).processing,
                      class: "mt-4",
                      type: "submit",
                      block: "",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Confirm ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode(VForm, {
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle-2 text-medium-emphasis mb-4" }, " This is a secure area of the application. Please confirm your password before continuing. "),
                  createVNode(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Password",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                  createVNode(VBtn, {
                    loading: unref(form).processing,
                    class: "mt-4",
                    type: "submit",
                    block: "",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post("/forgot-password");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$f, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, { onSubmit: submit }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle-2 text-medium-emphasis mb-4"${_scopeId2}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
                  if (__props.status) {
                    _push3(`<div class="text-subtitle-2 mb-4"${_scopeId2}>${ssrInterpolate(__props.status)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    loading: unref(form).processing,
                    class: "mt-4",
                    type: "submit",
                    block: "",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Email Password Reset Link `);
                      } else {
                        return [
                          createTextVNode(" Email Password Reset Link ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle-2 text-medium-emphasis mb-4" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
                    __props.status ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-subtitle-2 mb-4"
                    }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                    createVNode(VTextField, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      variant: "outlined",
                      density: "compact",
                      placeholder: "Email address",
                      "prepend-inner-icon": "mdi-email-outline",
                      "error-messages": unref(form).errors.email
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                    createVNode(VBtn, {
                      loading: unref(form).processing,
                      class: "mt-4",
                      type: "submit",
                      block: "",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Email Password Reset Link ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode(VForm, {
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle-2 text-medium-emphasis mb-4" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
                  __props.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-subtitle-2 mb-4"
                  }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
                  createVNode(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                  createVNode(VBtn, {
                    loading: unref(form).processing,
                    class: "mt-4",
                    type: "submit",
                    block: "",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const __default__$8 = {
  name: "LoginPage"
};
const _sfc_main$c = /* @__PURE__ */ Object.assign(__default__$8, {
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "johndoe@mail.com",
      password: "password",
      remember: false
    });
    const showPassword = ref(false);
    const submit = () => {
      form.post("/login", {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$f, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, { onSubmit: submit }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Email</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center justify-space-between"${_scopeId2}><div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Password</div>`);
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "text-caption text-decoration-none text-blue",
                    href: "/forgot-password",
                    rel: "noopener noreferrer",
                    target: "_blank"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Forgot password?`);
                      } else {
                        return [
                          createTextVNode(" Forgot password?")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCheckbox, {
                    modelValue: unref(form).remember,
                    "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                    label: "Remember me"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    loading: unref(form).processing,
                    type: "submit",
                    block: "",
                    color: "primary",
                    class: "mb-12"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Login`);
                      } else {
                        return [
                          createTextVNode("Login")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Email"),
                    createVNode(VTextField, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      variant: "outlined",
                      density: "compact",
                      placeholder: "Email address",
                      "prepend-inner-icon": "mdi-email-outline",
                      "error-messages": unref(form).errors.email
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                    createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                      createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password"),
                      createVNode(unref(Link), {
                        class: "text-caption text-decoration-none text-blue",
                        href: "/forgot-password",
                        rel: "noopener noreferrer",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Forgot password?")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VTextField, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      density: "compact",
                      variant: "outlined",
                      placeholder: "Enter your password",
                      "prepend-inner-icon": "mdi-lock-outline",
                      "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                      type: showPassword.value ? "text" : "password",
                      "error-messages": unref(form).errors.password,
                      "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                    createVNode(VCheckbox, {
                      modelValue: unref(form).remember,
                      "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                      label: "Remember me"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VBtn, {
                      loading: unref(form).processing,
                      type: "submit",
                      block: "",
                      color: "primary",
                      class: "mb-12"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Login")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "text-blue text-decoration-none",
                    href: "/register"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Sign up now `);
                        _push4(ssrRenderComponent(VIcon, { icon: "mdi-chevron-right" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Sign up now "),
                          createVNode(VIcon, { icon: "mdi-chevron-right" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      class: "text-blue text-decoration-none",
                      href: "/register"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign up now "),
                        createVNode(VIcon, { icon: "mdi-chevron-right" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              createVNode(VForm, {
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Email"),
                  createVNode(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                  createVNode("div", { class: "d-flex align-center justify-space-between" }, [
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password"),
                    createVNode(unref(Link), {
                      class: "text-caption text-decoration-none text-blue",
                      href: "/forgot-password",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Forgot password?")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                  createVNode(VCheckbox, {
                    modelValue: unref(form).remember,
                    "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                    label: "Remember me"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(VBtn, {
                    loading: unref(form).processing,
                    type: "submit",
                    block: "",
                    color: "primary",
                    class: "mb-12"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Login")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode(unref(Link), {
                    class: "text-blue text-decoration-none",
                    href: "/register"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Sign up now "),
                      createVNode(VIcon, { icon: "mdi-chevron-right" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const __default__$7 = {
  name: "RegisterPage"
};
const _sfc_main$b = /* @__PURE__ */ Object.assign(__default__$7, {
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const showPassword = ref(false);
    const submit = () => {
      form.post("/register", {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$f, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, { onSubmit: submit }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Name</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    type: "text",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Full name",
                    "prepend-inner-icon": "mdi-account",
                    "error-messages": unref(form).errors.name
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Email</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Password</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Password Confirmation</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password_confirmation,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    loading: unref(form).processing,
                    type: "submit",
                    block: "",
                    color: "primary",
                    class: "mb-5 mt-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Register`);
                      } else {
                        return [
                          createTextVNode("Register")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Name"),
                    createVNode(VTextField, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      type: "text",
                      variant: "outlined",
                      density: "compact",
                      placeholder: "Full name",
                      "prepend-inner-icon": "mdi-account",
                      "error-messages": unref(form).errors.name
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Email"),
                    createVNode(VTextField, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      variant: "outlined",
                      density: "compact",
                      placeholder: "Email address",
                      "prepend-inner-icon": "mdi-email-outline",
                      "error-messages": unref(form).errors.email
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password"),
                    createVNode(VTextField, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      density: "compact",
                      variant: "outlined",
                      placeholder: "Enter your password",
                      "prepend-inner-icon": "mdi-lock-outline",
                      "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                      type: showPassword.value ? "text" : "password",
                      "error-messages": unref(form).errors.password,
                      "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password Confirmation"),
                    createVNode(VTextField, {
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      density: "compact",
                      variant: "outlined",
                      placeholder: "Enter your password",
                      "prepend-inner-icon": "mdi-lock-outline",
                      "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                      type: showPassword.value ? "text" : "password",
                      "error-messages": unref(form).errors.password_confirmation,
                      "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                    createVNode(VBtn, {
                      loading: unref(form).processing,
                      type: "submit",
                      block: "",
                      color: "primary",
                      class: "mb-5 mt-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Register")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VCardText, { class: "text-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Link), {
                    class: "text-blue text-decoration-none",
                    href: "/login"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Already registered? `);
                      } else {
                        return [
                          createTextVNode(" Already registered? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Link), {
                      class: "text-blue text-decoration-none",
                      href: "/login"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Already registered? ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              createVNode(VForm, {
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Name"),
                  createVNode(VTextField, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    type: "text",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Full name",
                    "prepend-inner-icon": "mdi-account",
                    "error-messages": unref(form).errors.name
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Email"),
                  createVNode(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password"),
                  createVNode(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password Confirmation"),
                  createVNode(VTextField, {
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password_confirmation,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                  createVNode(VBtn, {
                    loading: unref(form).processing,
                    type: "submit",
                    block: "",
                    color: "primary",
                    class: "mb-5 mt-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Register")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              }),
              createVNode(VCardText, { class: "text-center" }, {
                default: withCtx(() => [
                  createVNode(unref(Link), {
                    class: "text-blue text-decoration-none",
                    href: "/login"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post("/reset-password", {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    const showPassword = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$f, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, { onSubmit: submit }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Email</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Password</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="text-subtitle-1 text-medium-emphasis"${_scopeId2}>Password Confirmation</div>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password_confirmation,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VBtn, {
                    loading: unref(form).processing,
                    class: "mt-4",
                    type: "submit",
                    block: "",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Reset Password `);
                      } else {
                        return [
                          createTextVNode(" Reset Password ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Email"),
                    createVNode(VTextField, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      variant: "outlined",
                      density: "compact",
                      placeholder: "Email address",
                      "prepend-inner-icon": "mdi-email-outline",
                      "error-messages": unref(form).errors.email
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password"),
                    createVNode(VTextField, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      density: "compact",
                      variant: "outlined",
                      placeholder: "Enter your password",
                      "prepend-inner-icon": "mdi-lock-outline",
                      "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                      type: showPassword.value ? "text" : "password",
                      "error-messages": unref(form).errors.password,
                      "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                    createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password Confirmation"),
                    createVNode(VTextField, {
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      density: "compact",
                      variant: "outlined",
                      placeholder: "Enter your password",
                      "prepend-inner-icon": "mdi-lock-outline",
                      "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                      type: showPassword.value ? "text" : "password",
                      "error-messages": unref(form).errors.password_confirmation,
                      "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                    createVNode(VBtn, {
                      loading: unref(form).processing,
                      class: "mt-4",
                      type: "submit",
                      block: "",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Reset Password ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode(VForm, {
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Email"),
                  createVNode(VTextField, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    variant: "outlined",
                    density: "compact",
                    placeholder: "Email address",
                    "prepend-inner-icon": "mdi-email-outline",
                    "error-messages": unref(form).errors.email
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"]),
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password"),
                  createVNode(VTextField, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                  createVNode("div", { class: "text-subtitle-1 text-medium-emphasis" }, "Password Confirmation"),
                  createVNode(VTextField, {
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    density: "compact",
                    variant: "outlined",
                    placeholder: "Enter your password",
                    "prepend-inner-icon": "mdi-lock-outline",
                    "append-inner-icon": showPassword.value ? "mdi-eye-off" : "mdi-eye",
                    type: showPassword.value ? "text" : "password",
                    "error-messages": unref(form).errors.password_confirmation,
                    "onClick:appendInner": ($event) => showPassword.value = !showPassword.value
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "error-messages", "onClick:appendInner"]),
                  createVNode(VBtn, {
                    loading: unref(form).processing,
                    class: "mt-4",
                    type: "submit",
                    block: "",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["loading"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post("/email/verification-notification");
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$f, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(VForm, { onSubmit: submit }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-subtitle-2 text-medium-emphasis mb-4"${_scopeId2}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
                  if (verificationLinkSent.value) {
                    _push3(`<div class="text-subtitle-2 mb-4"${_scopeId2}> A new verification link has been sent to the email address you provided during registration. </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="d-flex justify-space-between align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VBtn, {
                    loading: unref(form).processing,
                    type: "submit",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Resend Verification Email `);
                      } else {
                        return [
                          createTextVNode(" Resend Verification Email ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "/logout",
                    method: "post",
                    class: "text-black"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Log Out`);
                      } else {
                        return [
                          createTextVNode("Log Out")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-subtitle-2 text-medium-emphasis mb-4" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
                    verificationLinkSent.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-subtitle-2 mb-4"
                    }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
                    createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                      createVNode(VBtn, {
                        loading: unref(form).processing,
                        type: "submit",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Resend Verification Email ")
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(unref(Link), {
                        href: "/logout",
                        method: "post",
                        class: "text-black"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Log Out")
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode(VForm, {
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-subtitle-2 text-medium-emphasis mb-4" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
                  verificationLinkSent.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-subtitle-2 mb-4"
                  }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
                  createVNode("div", { class: "d-flex justify-space-between align-center" }, [
                    createVNode(VBtn, {
                      loading: unref(form).processing,
                      type: "submit",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Resend Verification Email ")
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(unref(Link), {
                      href: "/logout",
                      method: "post",
                      class: "text-black"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Log Out")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const navigation = {
  items: [
    {
      title: "Dashboard",
      icon: "mdi-view-dashboard",
      to: "/dashboard"
    },
    {
      title: "People",
      icon: "mdi-account-group",
      to: "/people"
    }
  ]
};
const _sfc_main$8 = {
  __name: "NavigationMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VList, mergeProps({ nav: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(navigation).items, (item, key) => {
              _push2(ssrRenderComponent(unref(Link), {
                key,
                href: item.to,
                as: "div"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(VListItem, {
                      "prepend-icon": item.icon,
                      title: item.title,
                      exact: item.exact,
                      link: "",
                      class: { "v-list-item--active": _ctx.$page.url.startsWith(item.to) }
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(VListItem, {
                        "prepend-icon": item.icon,
                        title: item.title,
                        exact: item.exact,
                        link: "",
                        class: { "v-list-item--active": _ctx.$page.url.startsWith(item.to) }
                      }, null, 8, ["prepend-icon", "title", "exact", "class"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(Link), {
              href: "/logout",
              method: "post",
              as: "div"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VListItem, {
                    "prepend-icon": "mdi-exit-to-app",
                    title: "Log Out",
                    link: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VListItem, {
                      "prepend-icon": "mdi-exit-to-app",
                      title: "Log Out",
                      link: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(navigation).items, (item, key) => {
                return openBlock(), createBlock(unref(Link), {
                  key,
                  href: item.to,
                  as: "div"
                }, {
                  default: withCtx(() => [
                    createVNode(VListItem, {
                      "prepend-icon": item.icon,
                      title: item.title,
                      exact: item.exact,
                      link: "",
                      class: { "v-list-item--active": _ctx.$page.url.startsWith(item.to) }
                    }, null, 8, ["prepend-icon", "title", "exact", "class"])
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128)),
              createVNode(unref(Link), {
                href: "/logout",
                method: "post",
                as: "div"
              }, {
                default: withCtx(() => [
                  createVNode(VListItem, {
                    "prepend-icon": "mdi-exit-to-app",
                    title: "Log Out",
                    link: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavigationMenu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __default__$6 = {
  data() {
    return {
      drawer: false,
      rail: false
    };
  },
  computed: {
    avatar() {
      return `https://www.gravatar.com/avatar/${md5(this.$page.props.auth.user.email)}?s=200`;
    }
  },
  watch: {
    $page: {
      handler() {
        const toast = useToast();
        const flash = this.$page.props.flash;
        if (flash.success) {
          toast.success(flash.success);
        } else if (flash.error) {
          toast.error(flash.error);
        }
      }
    }
  },
  mounted() {
    this.drawer = !this.$vuetify.display.mobile;
  }
};
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$6, {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VApp, mergeProps({ class: "bg-grey-lighten-4" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VNavigationDrawer, {
              modelValue: _ctx.drawer,
              "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
              rail: _ctx.rail,
              permanent: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VList, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VListItem, {
                          "prepend-avatar": _ctx.avatar,
                          title: _ctx.$page.props.auth.user.name,
                          subtitle: _ctx.$page.props.auth.user.email
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VListItem, {
                            "prepend-avatar": _ctx.avatar,
                            title: _ctx.$page.props.auth.user.name,
                            subtitle: _ctx.$page.props.auth.user.email
                          }, null, 8, ["prepend-avatar", "title", "subtitle"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VDivider, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        createVNode(VListItem, {
                          "prepend-avatar": _ctx.avatar,
                          title: _ctx.$page.props.auth.user.name,
                          subtitle: _ctx.$page.props.auth.user.email
                        }, null, 8, ["prepend-avatar", "title", "subtitle"])
                      ]),
                      _: 1
                    }),
                    createVNode(VDivider),
                    createVNode(_sfc_main$8)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VAppBar, { color: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.$vuetify.display.mobile) {
                    _push3(ssrRenderComponent(VAppBarNavIcon, {
                      onClick: ($event) => _ctx.drawer = !_ctx.drawer
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(VAppBarNavIcon, {
                      onClick: ($event) => _ctx.rail = !_ctx.rail
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(ssrRenderComponent(VToolbarTitle, { text: "Laravel" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    _ctx.$vuetify.display.mobile ? (openBlock(), createBlock(VAppBarNavIcon, {
                      key: 0,
                      onClick: withModifiers(($event) => _ctx.drawer = !_ctx.drawer, ["stop"])
                    }, null, 8, ["onClick"])) : (openBlock(), createBlock(VAppBarNavIcon, {
                      key: 1,
                      onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                    }, null, 8, ["onClick"])),
                    createVNode(VToolbarTitle, { text: "Laravel" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default")
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VNavigationDrawer, {
                modelValue: _ctx.drawer,
                "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
                rail: _ctx.rail,
                permanent: ""
              }, {
                default: withCtx(() => [
                  createVNode(VList, null, {
                    default: withCtx(() => [
                      createVNode(VListItem, {
                        "prepend-avatar": _ctx.avatar,
                        title: _ctx.$page.props.auth.user.name,
                        subtitle: _ctx.$page.props.auth.user.email
                      }, null, 8, ["prepend-avatar", "title", "subtitle"])
                    ]),
                    _: 1
                  }),
                  createVNode(VDivider),
                  createVNode(_sfc_main$8)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "rail"]),
              createVNode(VAppBar, { color: "primary" }, {
                default: withCtx(() => [
                  _ctx.$vuetify.display.mobile ? (openBlock(), createBlock(VAppBarNavIcon, {
                    key: 0,
                    onClick: withModifiers(($event) => _ctx.drawer = !_ctx.drawer, ["stop"])
                  }, null, 8, ["onClick"])) : (openBlock(), createBlock(VAppBarNavIcon, {
                    key: 1,
                    onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                  }, null, 8, ["onClick"])),
                  createVNode(VToolbarTitle, { text: "Laravel" })
                ]),
                _: 1
              }),
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __default__$5 = {
  name: "BreadcrumbsComponent",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
const _sfc_main$6 = /* @__PURE__ */ Object.assign(__default__$5, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VBreadcrumbs, mergeProps({ items: __props.items }, _attrs), {
        title: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!item.disabled) {
              _push2(ssrRenderComponent(unref(Link), {
                href: item.href,
                class: "v-breadcrumbs-item--link"
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(item.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(item.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.title)}</span>`);
            }
          } else {
            return [
              !item.disabled ? (openBlock(), createBlock(unref(Link), {
                key: 0,
                href: item.href,
                class: "v-breadcrumbs-item--link"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.title), 1)
                ]),
                _: 2
              }, 1032, ["href"])) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(item.title), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Breadcrumbs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __default__$4 = {
  name: "DashboardPage",
  data() {
    return {
      breadcrumbs: [
        {
          title: "Dashboard",
          disabled: true
        }
      ]
    };
  }
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign(__default__$4, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5"${_scopeId}><h5 class="text-h5 font-weight-bold"${_scopeId}>Dashboard</h5>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              items: _ctx.breadcrumbs,
              class: "pa-0 mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardText, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="text-h6 text-medium-emphasis"${_scopeId3}>Welcome back, ${ssrInterpolate(_ctx.$page.props.auth.user.name)}!</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "text-h6 text-medium-emphasis" }, "Welcome back, " + toDisplayString(_ctx.$page.props.auth.user.name) + "!", 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardText, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "text-h6 text-medium-emphasis" }, "Welcome back, " + toDisplayString(_ctx.$page.props.auth.user.name) + "!", 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-5" }, [
                createVNode("h5", { class: "text-h5 font-weight-bold" }, "Dashboard"),
                createVNode(_sfc_main$6, {
                  items: _ctx.breadcrumbs,
                  class: "pa-0 mt-1"
                }, null, 8, ["items"])
              ]),
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VCardText, null, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-h6 text-medium-emphasis" }, "Welcome back, " + toDisplayString(_ctx.$page.props.auth.user.name) + "!", 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const __default__$3 = {
  name: "PeopleCreate",
  data() {
    return {
      genders: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" }
      ],
      breadcrumbs: [
        {
          title: "Dashboard",
          disabled: false,
          href: "/dashboard"
        },
        {
          title: "People",
          disabled: false,
          href: "/people"
        },
        {
          title: "Create",
          disabled: true
        }
      ]
    };
  }
};
const _sfc_main$4 = /* @__PURE__ */ Object.assign(__default__$3, {
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: null,
      email: null,
      phone: null,
      gender: null,
      address: null
    });
    const submit = () => {
      form.post("/people", {
        onSuccess: () => {
          router.visit("/people");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Create People" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5"${_scopeId}><h5 class="text-h5 font-weight-bold"${_scopeId}>Create People</h5>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              items: _ctx.breadcrumbs,
              class: "pa-0 mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: submit }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(form).name,
                                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                            label: "Name",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.name
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).name,
                                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                              label: "Name",
                                              variant: "underlined",
                                              "error-messages": unref(form).errors.name
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(form).gender,
                                            "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                            items: _ctx.genders,
                                            "item-title": "text",
                                            "item-value": "value",
                                            label: "Gender",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.gender
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(form).gender,
                                              "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                              items: _ctx.genders,
                                              "item-title": "text",
                                              "item-value": "value",
                                              label: "Gender",
                                              variant: "underlined",
                                              "error-messages": unref(form).errors.gender
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(form).email,
                                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                            label: "Email",
                                            variant: "underlined",
                                            type: "email",
                                            "error-messages": unref(form).errors.email
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).email,
                                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                              label: "Email",
                                              variant: "underlined",
                                              type: "email",
                                              "error-messages": unref(form).errors.email
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(form).phone,
                                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                            label: "Phone",
                                            variant: "underlined",
                                            type: "tel",
                                            "error-messages": unref(form).errors.phone
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).phone,
                                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                              label: "Phone",
                                              variant: "underlined",
                                              type: "tel",
                                              "error-messages": unref(form).errors.phone
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextarea, {
                                            modelValue: unref(form).address,
                                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                            label: "Address",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.address
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextarea, {
                                              modelValue: unref(form).address,
                                              "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                              label: "Address",
                                              variant: "underlined",
                                              "error-messages": unref(form).errors.address
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).name,
                                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                            label: "Name",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.name
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(form).gender,
                                            "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                            items: _ctx.genders,
                                            "item-title": "text",
                                            "item-value": "value",
                                            label: "Gender",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.gender
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).email,
                                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                            label: "Email",
                                            variant: "underlined",
                                            type: "email",
                                            "error-messages": unref(form).errors.email
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).phone,
                                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                            label: "Phone",
                                            variant: "underlined",
                                            type: "tel",
                                            "error-messages": unref(form).errors.phone
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: unref(form).address,
                                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                            label: "Address",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.address
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).name,
                                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                          label: "Name",
                                          variant: "underlined",
                                          "error-messages": unref(form).errors.name
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(form).gender,
                                          "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                          items: _ctx.genders,
                                          "item-title": "text",
                                          "item-value": "value",
                                          label: "Gender",
                                          variant: "underlined",
                                          "error-messages": unref(form).errors.gender
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).email,
                                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                          label: "Email",
                                          variant: "underlined",
                                          type: "email",
                                          "error-messages": unref(form).errors.email
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).phone,
                                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                          label: "Phone",
                                          variant: "underlined",
                                          type: "tel",
                                          "error-messages": unref(form).errors.phone
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: unref(form).address,
                                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                          label: "Address",
                                          variant: "underlined",
                                          "error-messages": unref(form).errors.address
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Link), {
                                href: "/people",
                                as: "div"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, { text: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Cancel`);
                                        } else {
                                          return [
                                            createTextVNode("Cancel")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, { text: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cancel")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                type: "submit",
                                color: "primary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Create`);
                                  } else {
                                    return [
                                      createTextVNode("Create")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSpacer),
                                createVNode(unref(Link), {
                                  href: "/people",
                                  as: "div"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, { text: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cancel")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  type: "submit",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Create")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).name,
                                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                        label: "Name",
                                        variant: "underlined",
                                        "error-messages": unref(form).errors.name
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(form).gender,
                                        "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                        items: _ctx.genders,
                                        "item-title": "text",
                                        "item-value": "value",
                                        label: "Gender",
                                        variant: "underlined",
                                        "error-messages": unref(form).errors.gender
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        label: "Email",
                                        variant: "underlined",
                                        type: "email",
                                        "error-messages": unref(form).errors.email
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).phone,
                                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                        label: "Phone",
                                        variant: "underlined",
                                        type: "tel",
                                        "error-messages": unref(form).errors.phone
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: unref(form).address,
                                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                        label: "Address",
                                        variant: "underlined",
                                        "error-messages": unref(form).errors.address
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(unref(Link), {
                                href: "/people",
                                as: "div"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { text: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                type: "submit",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Create")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).name,
                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                      label: "Name",
                                      variant: "underlined",
                                      "error-messages": unref(form).errors.name
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(form).gender,
                                      "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                      items: _ctx.genders,
                                      "item-title": "text",
                                      "item-value": "value",
                                      label: "Gender",
                                      variant: "underlined",
                                      "error-messages": unref(form).errors.gender
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      label: "Email",
                                      variant: "underlined",
                                      type: "email",
                                      "error-messages": unref(form).errors.email
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).phone,
                                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                      label: "Phone",
                                      variant: "underlined",
                                      type: "tel",
                                      "error-messages": unref(form).errors.phone
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      modelValue: unref(form).address,
                                      "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                      label: "Address",
                                      variant: "underlined",
                                      "error-messages": unref(form).errors.address
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(unref(Link), {
                              href: "/people",
                              as: "div"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { text: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              type: "submit",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Create")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-5" }, [
                createVNode("h5", { class: "text-h5 font-weight-bold" }, "Create People"),
                createVNode(_sfc_main$6, {
                  items: _ctx.breadcrumbs,
                  class: "pa-0 mt-1"
                }, null, 8, ["items"])
              ]),
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    label: "Name",
                                    variant: "underlined",
                                    "error-messages": unref(form).errors.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(form).gender,
                                    "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                    items: _ctx.genders,
                                    "item-title": "text",
                                    "item-value": "value",
                                    label: "Gender",
                                    variant: "underlined",
                                    "error-messages": unref(form).errors.gender
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).email,
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                    label: "Email",
                                    variant: "underlined",
                                    type: "email",
                                    "error-messages": unref(form).errors.email
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).phone,
                                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                    label: "Phone",
                                    variant: "underlined",
                                    type: "tel",
                                    "error-messages": unref(form).errors.phone
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    modelValue: unref(form).address,
                                    "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                    label: "Address",
                                    variant: "underlined",
                                    "error-messages": unref(form).errors.address
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(unref(Link), {
                            href: "/people",
                            as: "div"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { text: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            type: "submit",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Create")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/People/Create.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const __default__$2 = {
  name: "PeopleEdit",
  data() {
    return {
      genders: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" }
      ],
      breadcrumbs: [
        {
          title: "Dashboard",
          disabled: false,
          href: "/dashboard"
        },
        {
          title: "People",
          disabled: false,
          href: "/people"
        },
        {
          title: "Edit",
          disabled: true
        }
      ]
    };
  }
};
const _sfc_main$3 = /* @__PURE__ */ Object.assign(__default__$2, {
  __ssrInlineRender: true,
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.person.name,
      email: props.person.email,
      phone: props.person.phone,
      gender: props.person.gender,
      address: props.person.address
    });
    const submit = () => {
      form.patch("/people/" + props.person.id, {
        onSuccess: () => {
          router.visit("/people");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Edit People" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5"${_scopeId}><h5 class="text-h5 font-weight-bold"${_scopeId}>Edit People</h5>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              items: _ctx.breadcrumbs,
              class: "pa-0 mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VCard, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VForm, { onSubmit: submit }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCardText, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VRow, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(form).name,
                                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                            label: "Name",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.name
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).name,
                                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                              label: "Name",
                                              variant: "underlined",
                                              "error-messages": unref(form).errors.name
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VSelect, {
                                            modelValue: unref(form).gender,
                                            "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                            items: _ctx.genders,
                                            "item-title": "text",
                                            "item-value": "value",
                                            label: "Gender",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.gender
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VSelect, {
                                              modelValue: unref(form).gender,
                                              "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                              items: _ctx.genders,
                                              "item-title": "text",
                                              "item-value": "value",
                                              label: "Gender",
                                              variant: "underlined",
                                              "error-messages": unref(form).errors.gender
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(form).email,
                                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                            label: "Email",
                                            variant: "underlined",
                                            type: "email",
                                            "error-messages": unref(form).errors.email
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).email,
                                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                              label: "Email",
                                              variant: "underlined",
                                              type: "email",
                                              "error-messages": unref(form).errors.email
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextField, {
                                            modelValue: unref(form).phone,
                                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                            label: "Phone",
                                            variant: "underlined",
                                            type: "tel",
                                            "error-messages": unref(form).errors.phone
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextField, {
                                              modelValue: unref(form).phone,
                                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                              label: "Phone",
                                              variant: "underlined",
                                              type: "tel",
                                              "error-messages": unref(form).errors.phone
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VCol, {
                                      cols: "12",
                                      sm: "12"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VTextarea, {
                                            modelValue: unref(form).address,
                                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                            label: "Address",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.address
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VTextarea, {
                                              modelValue: unref(form).address,
                                              "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                              label: "Address",
                                              variant: "underlined",
                                              "error-messages": unref(form).errors.address
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).name,
                                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                            label: "Name",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.name
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSelect, {
                                            modelValue: unref(form).gender,
                                            "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                            items: _ctx.genders,
                                            "item-title": "text",
                                            "item-value": "value",
                                            label: "Gender",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.gender
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).email,
                                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                            label: "Email",
                                            variant: "underlined",
                                            type: "email",
                                            "error-messages": unref(form).errors.email
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12",
                                        md: "6"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextField, {
                                            modelValue: unref(form).phone,
                                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                            label: "Phone",
                                            variant: "underlined",
                                            type: "tel",
                                            "error-messages": unref(form).errors.phone
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCol, {
                                        cols: "12",
                                        sm: "12"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VTextarea, {
                                            modelValue: unref(form).address,
                                            "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                            label: "Address",
                                            variant: "underlined",
                                            "error-messages": unref(form).errors.address
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VRow, null, {
                                  default: withCtx(() => [
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).name,
                                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                          label: "Name",
                                          variant: "underlined",
                                          "error-messages": unref(form).errors.name
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSelect, {
                                          modelValue: unref(form).gender,
                                          "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                          items: _ctx.genders,
                                          "item-title": "text",
                                          "item-value": "value",
                                          label: "Gender",
                                          variant: "underlined",
                                          "error-messages": unref(form).errors.gender
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).email,
                                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                          label: "Email",
                                          variant: "underlined",
                                          type: "email",
                                          "error-messages": unref(form).errors.email
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12",
                                      md: "6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextField, {
                                          modelValue: unref(form).phone,
                                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                          label: "Phone",
                                          variant: "underlined",
                                          type: "tel",
                                          "error-messages": unref(form).errors.phone
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCol, {
                                      cols: "12",
                                      sm: "12"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VTextarea, {
                                          modelValue: unref(form).address,
                                          "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                          label: "Address",
                                          variant: "underlined",
                                          "error-messages": unref(form).errors.address
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCardActions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VSpacer, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Link), {
                                href: "/people",
                                as: "div"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, { text: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Cancel`);
                                        } else {
                                          return [
                                            createTextVNode("Cancel")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, { text: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cancel")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VBtn, {
                                type: "submit",
                                color: "primary"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Save`);
                                  } else {
                                    return [
                                      createTextVNode("Save")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VSpacer),
                                createVNode(unref(Link), {
                                  href: "/people",
                                  as: "div"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, { text: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cancel")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  type: "submit",
                                  color: "primary"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Save")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createVNode(VRow, null, {
                                default: withCtx(() => [
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).name,
                                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                        label: "Name",
                                        variant: "underlined",
                                        "error-messages": unref(form).errors.name
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSelect, {
                                        modelValue: unref(form).gender,
                                        "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                        items: _ctx.genders,
                                        "item-title": "text",
                                        "item-value": "value",
                                        label: "Gender",
                                        variant: "underlined",
                                        "error-messages": unref(form).errors.gender
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).email,
                                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                        label: "Email",
                                        variant: "underlined",
                                        type: "email",
                                        "error-messages": unref(form).errors.email
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12",
                                    md: "6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextField, {
                                        modelValue: unref(form).phone,
                                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                        label: "Phone",
                                        variant: "underlined",
                                        type: "tel",
                                        "error-messages": unref(form).errors.phone
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCol, {
                                    cols: "12",
                                    sm: "12"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VTextarea, {
                                        modelValue: unref(form).address,
                                        "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                        label: "Address",
                                        variant: "underlined",
                                        "error-messages": unref(form).errors.address
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(unref(Link), {
                                href: "/people",
                                as: "div"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, { text: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                type: "submit",
                                color: "primary"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Save")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VForm, {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardText, null, {
                          default: withCtx(() => [
                            createVNode(VRow, null, {
                              default: withCtx(() => [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).name,
                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                      label: "Name",
                                      variant: "underlined",
                                      "error-messages": unref(form).errors.name
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSelect, {
                                      modelValue: unref(form).gender,
                                      "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                      items: _ctx.genders,
                                      "item-title": "text",
                                      "item-value": "value",
                                      label: "Gender",
                                      variant: "underlined",
                                      "error-messages": unref(form).errors.gender
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).email,
                                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                      label: "Email",
                                      variant: "underlined",
                                      type: "email",
                                      "error-messages": unref(form).errors.email
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextField, {
                                      modelValue: unref(form).phone,
                                      "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                      label: "Phone",
                                      variant: "underlined",
                                      type: "tel",
                                      "error-messages": unref(form).errors.phone
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VTextarea, {
                                      modelValue: unref(form).address,
                                      "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                      label: "Address",
                                      variant: "underlined",
                                      "error-messages": unref(form).errors.address
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(VCardActions, null, {
                          default: withCtx(() => [
                            createVNode(VSpacer),
                            createVNode(unref(Link), {
                              href: "/people",
                              as: "div"
                            }, {
                              default: withCtx(() => [
                                createVNode(VBtn, { text: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              type: "submit",
                              color: "primary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Save")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-5" }, [
                createVNode("h5", { class: "text-h5 font-weight-bold" }, "Edit People"),
                createVNode(_sfc_main$6, {
                  items: _ctx.breadcrumbs,
                  class: "pa-0 mt-1"
                }, null, 8, ["items"])
              ]),
              createVNode(VCard, null, {
                default: withCtx(() => [
                  createVNode(VForm, {
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(VCardText, null, {
                        default: withCtx(() => [
                          createVNode(VRow, null, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    label: "Name",
                                    variant: "underlined",
                                    "error-messages": unref(form).errors.name
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSelect, {
                                    modelValue: unref(form).gender,
                                    "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                    items: _ctx.genders,
                                    "item-title": "text",
                                    "item-value": "value",
                                    label: "Gender",
                                    variant: "underlined",
                                    "error-messages": unref(form).errors.gender
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).email,
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                    label: "Email",
                                    variant: "underlined",
                                    type: "email",
                                    "error-messages": unref(form).errors.email
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "6"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextField, {
                                    modelValue: unref(form).phone,
                                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                                    label: "Phone",
                                    variant: "underlined",
                                    type: "tel",
                                    "error-messages": unref(form).errors.phone
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              }),
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VTextarea, {
                                    modelValue: unref(form).address,
                                    "onUpdate:modelValue": ($event) => unref(form).address = $event,
                                    label: "Address",
                                    variant: "underlined",
                                    "error-messages": unref(form).errors.address
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error-messages"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VCardActions, null, {
                        default: withCtx(() => [
                          createVNode(VSpacer),
                          createVNode(unref(Link), {
                            href: "/people",
                            as: "div"
                          }, {
                            default: withCtx(() => [
                              createVNode(VBtn, { text: "" }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(VBtn, {
                            type: "submit",
                            color: "primary"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Save")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/People/Edit.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const __default__$1 = {
  name: "PeopleIndex",
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      headers: [
        { title: "Name", key: "name" },
        { title: "Gender", key: "gender" },
        { title: "Email", key: "email" },
        { title: "Phone Number", key: "phone" },
        { title: "Created At", key: "created_at" },
        { title: "Action", key: "action", sortable: false }
      ],
      breadcrumbs: [
        {
          title: "Dashboard",
          disabled: false,
          href: "/dashboard"
        },
        {
          title: "People",
          disabled: true
        }
      ],
      isLoadingTable: false,
      search: null,
      deleteDialog: false,
      isLoading: false,
      deleteId: null
    };
  },
  methods: {
    loadItems({ page, itemsPerPage, sortBy, search }) {
      this.isLoadingTable = true;
      var params = {
        page,
        limit: itemsPerPage,
        sort: sortBy[0]
      };
      if (search) {
        params.search = search;
      }
      this.$inertia.get("/people", params, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoadingTable = false;
        }
      });
    },
    deleteItem(item) {
      this.deleteId = item.id;
      this.deleteDialog = true;
    },
    submitDelete() {
      this.isLoading = true;
      this.$inertia.delete(`/people/${this.deleteId}`, {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.isLoading = false;
          this.deleteDialog = false;
        }
      });
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "People" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-5"${_scopeId}><h5 class="text-h5 font-weight-bold"${_scopeId}>People</h5>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              items: _ctx.breadcrumbs,
              class: "pa-0 mt-1"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(VCard, { class: "pa-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-wrap align-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(VTextField, {
                    modelValue: _ctx.search,
                    "onUpdate:modelValue": ($event) => _ctx.search = $event,
                    label: "Search",
                    variant: "underlined",
                    "prepend-inner-icon": "mdi-magnify",
                    "hide-details": "",
                    clearable: "",
                    "single-line": ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(Link), {
                    href: "/people/create",
                    as: "div"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VBtn, { color: "primary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Create`);
                            } else {
                              return [
                                createTextVNode("Create")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VBtn, { color: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("Create")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(VDataTableServer, {
                    items: __props.data.data,
                    "items-length": __props.data.total,
                    headers: _ctx.headers,
                    search: _ctx.search,
                    class: "elevation-0",
                    loading: _ctx.isLoadingTable,
                    "onUpdate:options": _ctx.loadItems
                  }, {
                    [`item.gender`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(item.gender == "male" ? "Male" : "Female")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(item.gender == "male" ? "Male" : "Female"), 1)
                        ];
                      }
                    }),
                    [`item.action`]: withCtx(({ item }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Link), {
                          href: `/people/${item.id}/edit`,
                          as: "button"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VIcon, {
                                color: "warning",
                                icon: "mdi-pencil",
                                size: "small"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VIcon, {
                                  color: "warning",
                                  icon: "mdi-pencil",
                                  size: "small"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VIcon, {
                          class: "ml-2",
                          color: "error",
                          icon: "mdi-delete",
                          size: "small",
                          onClick: ($event) => _ctx.deleteItem(item)
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(Link), {
                            href: `/people/${item.id}/edit`,
                            as: "button"
                          }, {
                            default: withCtx(() => [
                              createVNode(VIcon, {
                                color: "warning",
                                icon: "mdi-pencil",
                                size: "small"
                              })
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode(VIcon, {
                            class: "ml-2",
                            color: "error",
                            icon: "mdi-delete",
                            size: "small",
                            onClick: ($event) => _ctx.deleteItem(item)
                          }, null, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-wrap align-center" }, [
                      createVNode(VTextField, {
                        modelValue: _ctx.search,
                        "onUpdate:modelValue": ($event) => _ctx.search = $event,
                        label: "Search",
                        variant: "underlined",
                        "prepend-inner-icon": "mdi-magnify",
                        "hide-details": "",
                        clearable: "",
                        "single-line": ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(VSpacer),
                      createVNode(unref(Link), {
                        href: "/people/create",
                        as: "div"
                      }, {
                        default: withCtx(() => [
                          createVNode(VBtn, { color: "primary" }, {
                            default: withCtx(() => [
                              createTextVNode("Create")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(VDataTableServer, {
                      items: __props.data.data,
                      "items-length": __props.data.total,
                      headers: _ctx.headers,
                      search: _ctx.search,
                      class: "elevation-0",
                      loading: _ctx.isLoadingTable,
                      "onUpdate:options": _ctx.loadItems
                    }, {
                      [`item.gender`]: withCtx(({ item }) => [
                        createTextVNode(toDisplayString(item.gender == "male" ? "Male" : "Female"), 1)
                      ]),
                      [`item.action`]: withCtx(({ item }) => [
                        createVNode(unref(Link), {
                          href: `/people/${item.id}/edit`,
                          as: "button"
                        }, {
                          default: withCtx(() => [
                            createVNode(VIcon, {
                              color: "warning",
                              icon: "mdi-pencil",
                              size: "small"
                            })
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode(VIcon, {
                          class: "ml-2",
                          color: "error",
                          icon: "mdi-delete",
                          size: "small",
                          onClick: ($event) => _ctx.deleteItem(item)
                        }, null, 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1032, ["items", "items-length", "headers", "search", "loading", "onUpdate:options"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(VRow, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VDialog, {
                    modelValue: _ctx.deleteDialog,
                    "onUpdate:modelValue": ($event) => _ctx.deleteDialog = $event,
                    persistent: "",
                    width: "auto"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VCard, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardText, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Are you sure you want to delete this item?`);
                                  } else {
                                    return [
                                      createTextVNode("Are you sure you want to delete this item?")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardActions, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSpacer, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "error",
                                      text: "",
                                      onClick: ($event) => _ctx.deleteDialog = false
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Cancel`);
                                        } else {
                                          return [
                                            createTextVNode("Cancel")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(VBtn, {
                                      color: "primary",
                                      loading: _ctx.isLoading,
                                      text: "",
                                      onClick: _ctx.submitDelete
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Delete`);
                                        } else {
                                          return [
                                            createTextVNode("Delete")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSpacer),
                                      createVNode(VBtn, {
                                        color: "error",
                                        text: "",
                                        onClick: ($event) => _ctx.deleteDialog = false
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Cancel")
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(VBtn, {
                                        color: "primary",
                                        loading: _ctx.isLoading,
                                        text: "",
                                        onClick: _ctx.submitDelete
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("Delete")
                                        ]),
                                        _: 1
                                      }, 8, ["loading", "onClick"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardText, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Are you sure you want to delete this item?")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardActions, null, {
                                  default: withCtx(() => [
                                    createVNode(VSpacer),
                                    createVNode(VBtn, {
                                      color: "error",
                                      text: "",
                                      onClick: ($event) => _ctx.deleteDialog = false
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Cancel")
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(VBtn, {
                                      color: "primary",
                                      loading: _ctx.isLoading,
                                      text: "",
                                      onClick: _ctx.submitDelete
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("Delete")
                                      ]),
                                      _: 1
                                    }, 8, ["loading", "onClick"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VCard, null, {
                            default: withCtx(() => [
                              createVNode(VCardText, null, {
                                default: withCtx(() => [
                                  createTextVNode("Are you sure you want to delete this item?")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardActions, null, {
                                default: withCtx(() => [
                                  createVNode(VSpacer),
                                  createVNode(VBtn, {
                                    color: "error",
                                    text: "",
                                    onClick: ($event) => _ctx.deleteDialog = false
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cancel")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(VBtn, {
                                    color: "primary",
                                    loading: _ctx.isLoading,
                                    text: "",
                                    onClick: _ctx.submitDelete
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Delete")
                                    ]),
                                    _: 1
                                  }, 8, ["loading", "onClick"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VDialog, {
                      modelValue: _ctx.deleteDialog,
                      "onUpdate:modelValue": ($event) => _ctx.deleteDialog = $event,
                      persistent: "",
                      width: "auto"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, null, {
                          default: withCtx(() => [
                            createVNode(VCardText, null, {
                              default: withCtx(() => [
                                createTextVNode("Are you sure you want to delete this item?")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardActions, null, {
                              default: withCtx(() => [
                                createVNode(VSpacer),
                                createVNode(VBtn, {
                                  color: "error",
                                  text: "",
                                  onClick: ($event) => _ctx.deleteDialog = false
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cancel")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(VBtn, {
                                  color: "primary",
                                  loading: _ctx.isLoading,
                                  text: "",
                                  onClick: _ctx.submitDelete
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Delete")
                                  ]),
                                  _: 1
                                }, 8, ["loading", "onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "mb-5" }, [
                createVNode("h5", { class: "text-h5 font-weight-bold" }, "People"),
                createVNode(_sfc_main$6, {
                  items: _ctx.breadcrumbs,
                  class: "pa-0 mt-1"
                }, null, 8, ["items"])
              ]),
              createVNode(VCard, { class: "pa-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-wrap align-center" }, [
                    createVNode(VTextField, {
                      modelValue: _ctx.search,
                      "onUpdate:modelValue": ($event) => _ctx.search = $event,
                      label: "Search",
                      variant: "underlined",
                      "prepend-inner-icon": "mdi-magnify",
                      "hide-details": "",
                      clearable: "",
                      "single-line": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(VSpacer),
                    createVNode(unref(Link), {
                      href: "/people/create",
                      as: "div"
                    }, {
                      default: withCtx(() => [
                        createVNode(VBtn, { color: "primary" }, {
                          default: withCtx(() => [
                            createTextVNode("Create")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(VDataTableServer, {
                    items: __props.data.data,
                    "items-length": __props.data.total,
                    headers: _ctx.headers,
                    search: _ctx.search,
                    class: "elevation-0",
                    loading: _ctx.isLoadingTable,
                    "onUpdate:options": _ctx.loadItems
                  }, {
                    [`item.gender`]: withCtx(({ item }) => [
                      createTextVNode(toDisplayString(item.gender == "male" ? "Male" : "Female"), 1)
                    ]),
                    [`item.action`]: withCtx(({ item }) => [
                      createVNode(unref(Link), {
                        href: `/people/${item.id}/edit`,
                        as: "button"
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, {
                            color: "warning",
                            icon: "mdi-pencil",
                            size: "small"
                          })
                        ]),
                        _: 2
                      }, 1032, ["href"]),
                      createVNode(VIcon, {
                        class: "ml-2",
                        color: "error",
                        icon: "mdi-delete",
                        size: "small",
                        onClick: ($event) => _ctx.deleteItem(item)
                      }, null, 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1032, ["items", "items-length", "headers", "search", "loading", "onUpdate:options"])
                ]),
                _: 1
              }),
              createVNode(VRow, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(VDialog, {
                    modelValue: _ctx.deleteDialog,
                    "onUpdate:modelValue": ($event) => _ctx.deleteDialog = $event,
                    persistent: "",
                    width: "auto"
                  }, {
                    default: withCtx(() => [
                      createVNode(VCard, null, {
                        default: withCtx(() => [
                          createVNode(VCardText, null, {
                            default: withCtx(() => [
                              createTextVNode("Are you sure you want to delete this item?")
                            ]),
                            _: 1
                          }),
                          createVNode(VCardActions, null, {
                            default: withCtx(() => [
                              createVNode(VSpacer),
                              createVNode(VBtn, {
                                color: "error",
                                text: "",
                                onClick: ($event) => _ctx.deleteDialog = false
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cancel")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(VBtn, {
                                color: "primary",
                                loading: _ctx.isLoading,
                                text: "",
                                onClick: _ctx.submitDelete
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Delete")
                                ]),
                                _: 1
                              }, 8, ["loading", "onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/People/Index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 432 384",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M219.897 103.248L146.523 230.363L216 350.772L308.021 191.386L400 32H261.005L219.897 103.248Z" fill="#1697F6"></path><path d="M124.021 191.386L128.84 199.768L197.478 80.8258L225.68 32H216H32L124.021 191.386Z" fill="#AEDDFF"></path><path d="M261.005 32C295.785 146.458 216 350.772 216 350.772L146.523 230.363L261.005 32Z" fill="#1867C0"></path><path d="M225.68 32C79.1426 32 128.84 199.768 128.84 199.768L225.68 32Z" fill="#7BC6FF"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/VuetifyLogo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const VuetifyLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  name: "WelcomePage"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    auth: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(ssrRenderComponent(VApp, { class: "bg-grey-lighten-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(VMain, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VContainer, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VRow, {
                          align: "center",
                          justify: "center",
                          style: { "height": "100vh" }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "10",
                                lg: "4"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VCard, { class: "pa-3 rounded-lg elevation-8" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(VCardTitle, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<div class="d-flex justify-center mb-4"${_scopeId7}>`);
                                                _push8(ssrRenderComponent(ApplicationLogo, {
                                                  class: "mr-1",
                                                  style: { "height": "75" }
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(VuetifyLogo, {
                                                  class: "ml-1",
                                                  style: { "height": "75" }
                                                }, null, _parent8, _scopeId7));
                                                _push8(`</div><span class="text-h5"${_scopeId7}>Welcome to Laravel + Vuetify</span>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "d-flex justify-center mb-4" }, [
                                                    createVNode(ApplicationLogo, {
                                                      class: "mr-1",
                                                      style: { "height": "75" }
                                                    }),
                                                    createVNode(VuetifyLogo, {
                                                      class: "ml-1",
                                                      style: { "height": "75" }
                                                    })
                                                  ]),
                                                  createVNode("span", { class: "text-h5" }, "Welcome to Laravel + Vuetify")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`<p class="text-body-2"${_scopeId7}> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p>`);
                                              } else {
                                                return [
                                                  createVNode("p", { class: "text-body-2" }, " Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. ")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardActions, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                if (props.auth.user != null) {
                                                  _push8(`<div${_scopeId7}>`);
                                                  _push8(ssrRenderComponent(unref(Link), {
                                                    href: "/dashboard",
                                                    as: "div"
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(ssrRenderComponent(VBtn, { color: "primary" }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`Dashboard`);
                                                            } else {
                                                              return [
                                                                createTextVNode("Dashboard")
                                                              ];
                                                            }
                                                          }),
                                                          _: 1
                                                        }, _parent9, _scopeId8));
                                                      } else {
                                                        return [
                                                          createVNode(VBtn, { color: "primary" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Dashboard")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ];
                                                      }
                                                    }),
                                                    _: 1
                                                  }, _parent8, _scopeId7));
                                                  _push8(`</div>`);
                                                } else {
                                                  _push8(`<div${_scopeId7}><div class="d-flex"${_scopeId7}>`);
                                                  if (props.canLogin) {
                                                    _push8(ssrRenderComponent(unref(Link), {
                                                      href: "/login",
                                                      class: "mr-2",
                                                      as: "div"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VBtn, { color: "primary" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Login`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Login")
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VBtn, { color: "primary" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Login")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      _: 1
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  if (props.canRegister) {
                                                    _push8(ssrRenderComponent(unref(Link), {
                                                      href: "/register",
                                                      as: "div"
                                                    }, {
                                                      default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(ssrRenderComponent(VBtn, { color: "secondary" }, {
                                                            default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                              if (_push10) {
                                                                _push10(`Sign Up`);
                                                              } else {
                                                                return [
                                                                  createTextVNode("Sign Up")
                                                                ];
                                                              }
                                                            }),
                                                            _: 1
                                                          }, _parent9, _scopeId8));
                                                        } else {
                                                          return [
                                                            createVNode(VBtn, { color: "secondary" }, {
                                                              default: withCtx(() => [
                                                                createTextVNode("Sign Up")
                                                              ]),
                                                              _: 1
                                                            })
                                                          ];
                                                        }
                                                      }),
                                                      _: 1
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    _push8(`<!---->`);
                                                  }
                                                  _push8(`</div></div>`);
                                                }
                                              } else {
                                                return [
                                                  props.auth.user != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                                    createVNode(unref(Link), {
                                                      href: "/dashboard",
                                                      as: "div"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, { color: "primary" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Dashboard")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })
                                                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                                    createVNode("div", { class: "d-flex" }, [
                                                      props.canLogin ? (openBlock(), createBlock(unref(Link), {
                                                        key: 0,
                                                        href: "/login",
                                                        class: "mr-2",
                                                        as: "div"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, { color: "primary" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Login")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true),
                                                      props.canRegister ? (openBlock(), createBlock(unref(Link), {
                                                        key: 1,
                                                        href: "/register",
                                                        as: "div"
                                                      }, {
                                                        default: withCtx(() => [
                                                          createVNode(VBtn, { color: "secondary" }, {
                                                            default: withCtx(() => [
                                                              createTextVNode("Sign Up")
                                                            ]),
                                                            _: 1
                                                          })
                                                        ]),
                                                        _: 1
                                                      })) : createCommentVNode("", true)
                                                    ])
                                                  ]))
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(VCardTitle, null, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "d-flex justify-center mb-4" }, [
                                                  createVNode(ApplicationLogo, {
                                                    class: "mr-1",
                                                    style: { "height": "75" }
                                                  }),
                                                  createVNode(VuetifyLogo, {
                                                    class: "ml-1",
                                                    style: { "height": "75" }
                                                  })
                                                ]),
                                                createVNode("span", { class: "text-h5" }, "Welcome to Laravel + Vuetify")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardText, null, {
                                              default: withCtx(() => [
                                                createVNode("p", { class: "text-body-2" }, " Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(VCardActions, null, {
                                              default: withCtx(() => [
                                                props.auth.user != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                                  createVNode(unref(Link), {
                                                    href: "/dashboard",
                                                    as: "div"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, { color: "primary" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Dashboard")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })
                                                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                                  createVNode("div", { class: "d-flex" }, [
                                                    props.canLogin ? (openBlock(), createBlock(unref(Link), {
                                                      key: 0,
                                                      href: "/login",
                                                      class: "mr-2",
                                                      as: "div"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, { color: "primary" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Login")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true),
                                                    props.canRegister ? (openBlock(), createBlock(unref(Link), {
                                                      key: 1,
                                                      href: "/register",
                                                      as: "div"
                                                    }, {
                                                      default: withCtx(() => [
                                                        createVNode(VBtn, { color: "secondary" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Sign Up")
                                                          ]),
                                                          _: 1
                                                        })
                                                      ]),
                                                      _: 1
                                                    })) : createCommentVNode("", true)
                                                  ])
                                                ]))
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VCard, { class: "pa-3 rounded-lg elevation-8" }, {
                                        default: withCtx(() => [
                                          createVNode(VCardTitle, null, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "d-flex justify-center mb-4" }, [
                                                createVNode(ApplicationLogo, {
                                                  class: "mr-1",
                                                  style: { "height": "75" }
                                                }),
                                                createVNode(VuetifyLogo, {
                                                  class: "ml-1",
                                                  style: { "height": "75" }
                                                })
                                              ]),
                                              createVNode("span", { class: "text-h5" }, "Welcome to Laravel + Vuetify")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardText, null, {
                                            default: withCtx(() => [
                                              createVNode("p", { class: "text-body-2" }, " Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(VCardActions, null, {
                                            default: withCtx(() => [
                                              props.auth.user != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                                createVNode(unref(Link), {
                                                  href: "/dashboard",
                                                  as: "div"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, { color: "primary" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Dashboard")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })
                                              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                                createVNode("div", { class: "d-flex" }, [
                                                  props.canLogin ? (openBlock(), createBlock(unref(Link), {
                                                    key: 0,
                                                    href: "/login",
                                                    class: "mr-2",
                                                    as: "div"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, { color: "primary" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Login")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true),
                                                  props.canRegister ? (openBlock(), createBlock(unref(Link), {
                                                    key: 1,
                                                    href: "/register",
                                                    as: "div"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(VBtn, { color: "secondary" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Sign Up")
                                                        ]),
                                                        _: 1
                                                      })
                                                    ]),
                                                    _: 1
                                                  })) : createCommentVNode("", true)
                                                ])
                                              ]))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCol, {
                                  cols: "12",
                                  sm: "12",
                                  md: "10",
                                  lg: "4"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VCard, { class: "pa-3 rounded-lg elevation-8" }, {
                                      default: withCtx(() => [
                                        createVNode(VCardTitle, null, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "d-flex justify-center mb-4" }, [
                                              createVNode(ApplicationLogo, {
                                                class: "mr-1",
                                                style: { "height": "75" }
                                              }),
                                              createVNode(VuetifyLogo, {
                                                class: "ml-1",
                                                style: { "height": "75" }
                                              })
                                            ]),
                                            createVNode("span", { class: "text-h5" }, "Welcome to Laravel + Vuetify")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardText, null, {
                                          default: withCtx(() => [
                                            createVNode("p", { class: "text-body-2" }, " Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(VCardActions, null, {
                                          default: withCtx(() => [
                                            props.auth.user != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                              createVNode(unref(Link), {
                                                href: "/dashboard",
                                                as: "div"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Dashboard")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                              createVNode("div", { class: "d-flex" }, [
                                                props.canLogin ? (openBlock(), createBlock(unref(Link), {
                                                  key: 0,
                                                  href: "/login",
                                                  class: "mr-2",
                                                  as: "div"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, { color: "primary" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Login")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true),
                                                props.canRegister ? (openBlock(), createBlock(unref(Link), {
                                                  key: 1,
                                                  href: "/register",
                                                  as: "div"
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(VBtn, { color: "secondary" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Sign Up")
                                                      ]),
                                                      _: 1
                                                    })
                                                  ]),
                                                  _: 1
                                                })) : createCommentVNode("", true)
                                              ])
                                            ]))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VRow, {
                            align: "center",
                            justify: "center",
                            style: { "height": "100vh" }
                          }, {
                            default: withCtx(() => [
                              createVNode(VCol, {
                                cols: "12",
                                sm: "12",
                                md: "10",
                                lg: "4"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, { class: "pa-3 rounded-lg elevation-8" }, {
                                    default: withCtx(() => [
                                      createVNode(VCardTitle, null, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "d-flex justify-center mb-4" }, [
                                            createVNode(ApplicationLogo, {
                                              class: "mr-1",
                                              style: { "height": "75" }
                                            }),
                                            createVNode(VuetifyLogo, {
                                              class: "ml-1",
                                              style: { "height": "75" }
                                            })
                                          ]),
                                          createVNode("span", { class: "text-h5" }, "Welcome to Laravel + Vuetify")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardText, null, {
                                        default: withCtx(() => [
                                          createVNode("p", { class: "text-body-2" }, " Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(VCardActions, null, {
                                        default: withCtx(() => [
                                          props.auth.user != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createVNode(unref(Link), {
                                              href: "/dashboard",
                                              as: "div"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Dashboard")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                            createVNode("div", { class: "d-flex" }, [
                                              props.canLogin ? (openBlock(), createBlock(unref(Link), {
                                                key: 0,
                                                href: "/login",
                                                class: "mr-2",
                                                as: "div"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, { color: "primary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Login")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true),
                                              props.canRegister ? (openBlock(), createBlock(unref(Link), {
                                                key: 1,
                                                href: "/register",
                                                as: "div"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VBtn, { color: "secondary" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Sign Up")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })) : createCommentVNode("", true)
                                            ])
                                          ]))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VContainer, null, {
                      default: withCtx(() => [
                        createVNode(VRow, {
                          align: "center",
                          justify: "center",
                          style: { "height": "100vh" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VCol, {
                              cols: "12",
                              sm: "12",
                              md: "10",
                              lg: "4"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, { class: "pa-3 rounded-lg elevation-8" }, {
                                  default: withCtx(() => [
                                    createVNode(VCardTitle, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "d-flex justify-center mb-4" }, [
                                          createVNode(ApplicationLogo, {
                                            class: "mr-1",
                                            style: { "height": "75" }
                                          }),
                                          createVNode(VuetifyLogo, {
                                            class: "ml-1",
                                            style: { "height": "75" }
                                          })
                                        ]),
                                        createVNode("span", { class: "text-h5" }, "Welcome to Laravel + Vuetify")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardText, null, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "text-body-2" }, " Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(VCardActions, null, {
                                      default: withCtx(() => [
                                        props.auth.user != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createVNode(unref(Link), {
                                            href: "/dashboard",
                                            as: "div"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Dashboard")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                          createVNode("div", { class: "d-flex" }, [
                                            props.canLogin ? (openBlock(), createBlock(unref(Link), {
                                              key: 0,
                                              href: "/login",
                                              class: "mr-2",
                                              as: "div"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { color: "primary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Login")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            props.canRegister ? (openBlock(), createBlock(unref(Link), {
                                              key: 1,
                                              href: "/register",
                                              as: "div"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(VBtn, { color: "secondary" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Sign Up")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true)
                                          ])
                                        ]))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(VMain, null, {
                default: withCtx(() => [
                  createVNode(VContainer, null, {
                    default: withCtx(() => [
                      createVNode(VRow, {
                        align: "center",
                        justify: "center",
                        style: { "height": "100vh" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCol, {
                            cols: "12",
                            sm: "12",
                            md: "10",
                            lg: "4"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, { class: "pa-3 rounded-lg elevation-8" }, {
                                default: withCtx(() => [
                                  createVNode(VCardTitle, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "d-flex justify-center mb-4" }, [
                                        createVNode(ApplicationLogo, {
                                          class: "mr-1",
                                          style: { "height": "75" }
                                        }),
                                        createVNode(VuetifyLogo, {
                                          class: "ml-1",
                                          style: { "height": "75" }
                                        })
                                      ]),
                                      createVNode("span", { class: "text-h5" }, "Welcome to Laravel + Vuetify")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardText, null, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "text-body-2" }, " Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardActions, null, {
                                    default: withCtx(() => [
                                      props.auth.user != null ? (openBlock(), createBlock("div", { key: 0 }, [
                                        createVNode(unref(Link), {
                                          href: "/dashboard",
                                          as: "div"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VBtn, { color: "primary" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Dashboard")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                        createVNode("div", { class: "d-flex" }, [
                                          props.canLogin ? (openBlock(), createBlock(unref(Link), {
                                            key: 0,
                                            href: "/login",
                                            class: "mr-2",
                                            as: "div"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { color: "primary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Login")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          props.canRegister ? (openBlock(), createBlock(unref(Link), {
                                            key: 1,
                                            href: "/register",
                                            as: "div"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VBtn, { color: "secondary" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Sign Up")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true)
                                        ])
                                      ]))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_1, "./Pages/Auth/Login.vue": __vite_glob_0_2, "./Pages/Auth/Register.vue": __vite_glob_0_3, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_4, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_5, "./Pages/Dashboard.vue": __vite_glob_0_6, "./Pages/People/Create.vue": __vite_glob_0_7, "./Pages/People/Edit.vue": __vite_glob_0_8, "./Pages/People/Index.vue": __vite_glob_0_9, "./Pages/Welcome.vue": __vite_glob_0_10 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
