import{c as t}from"./index-faea7bd5.js";function s(e){return t.get("member/member",{params:e})}function r(e){return t.get(`member/member/${e}`)}function u(){return t.get("member/memberno")}function m(e){return t.post("member/member",e,{showSuccessMessage:!0})}function c(e){return t.get("member/register/channel",e)}function o(e){return t.delete(`member/member/${e}`,{showSuccessMessage:!0})}function a(e){return t.get("member/label",{params:e})}function i(e){return t.get(`member/label/${e}`)}function g(e){return t.post("member/label",e,{showSuccessMessage:!0})}function b(e){return t.put(`member/label/${e.label_id}`,e,{showSuccessMessage:!0})}function f(e){return t.delete(`member/label/${e}`,{showSuccessMessage:!0})}function l(){return t.get("member/label/all")}function h(e){return t.put(`member/member/modify/${e.member_id}/${e.field}`,e,{showSuccessMessage:!0})}function M(e){return t.get(`member/account/change_type/${e}`)}function d(e){return t.get("member/account/point",{params:e})}function p(e){return t.get("member/account/balance",{params:e})}function S(e){return t.get("member/account/money",{params:e})}function L(e){return t.get("member/account/commission",{params:e})}function C(e){return t.post("member/account/point",e,{showSuccessMessage:!0})}function _(e){return t.post("member/account/balance",e,{showSuccessMessage:!0})}function w(){return t.get("member/config/login")}function $(e){return t.post("member/config/login",e,{showSuccessMessage:!0})}function y(){return t.get("member/config/member")}function O(e){return t.post("member/config/member",e,{showSuccessMessage:!0})}function B(){return t.get("member/cash_out/transfertype")}function T(e){return t.get("member/account/sum_commission",{params:e})}function A(e){return t.get("member/account/sum_point",{params:e})}function j(e){return t.get("member/account/sum_balance",{params:e})}function D(){return t.get("member/account/type")}function I(e){return t.get(`member/account/change_type/${e.account_type}`)}function P(){return t.get("member/config/cash_out")}function q(e){return t.post("member/config/cash_out",e,{showSuccessMessage:!0})}function x(e){return t.get("member/cash_out",{params:e})}function k(e){return t.get(`member/cash_out/${e}`,{})}function v(e){return t.put(`member/cash_out/audit/${e.id}/${e.action}`,e,{showSuccessMessage:!0})}function z(e){return t.put(`member/cash_out/transfer/${e.id}`,e,{showSuccessMessage:!0})}function E(e){return t.put(`member/setstatus/${e.status}`,e,{showSuccessMessage:!0})}function F(){return t.get("member/cash_out/status")}function G(){return t.get("member/cash_out/stat")}export{f as A,c as B,o as C,E as D,r as E,A as F,d as G,P as H,q as I,w as J,$ as K,y as L,O as M,G as a,B as b,x as c,k as d,v as e,M as f,F as g,p as h,S as i,j,D as k,I as l,z as m,T as n,L as o,s as p,u as q,m as r,g as s,i as t,b as u,l as v,h as w,_ as x,C as y,a as z};
