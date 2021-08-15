import * as types from './actionTypes';

// BUSINESS LOGIC ACTIONS

// action creators
export const getHistory = (history) => ({
  type: types.GET_HISTORY,
  payload: history,
});

export const deleteFromHistory = (reqRes) => ({
  type: types.DELETE_HISTORY,
  payload: reqRes,
});

export const clearHistory = () => ({
  type: types.CLEAR_HISTORY,
});

export const getCollections = (collections) => ({
  type: types.GET_COLLECTIONS,
  payload: collections,
});

export const deleteFromCollection = (collection) => ({
  type: types.DELETE_COLLECTION,
  payload: collection,
});

export const collectionToReqRes = (reqResArray) => ({
  type: types.COLLECTION_TO_REQRES,
  payload: reqResArray,
});

export const collectionAdd = (collection) => ({
  type: types.COLLECTION_ADD,
  payload: collection,
});

export const collectionUpdate = (collection) => ({
  type: types.COLLECTION_UPDATE,
  payload: collection,
});

export const reqResClear = () => ({
  type: types.REQRES_CLEAR,
});

export const reqResAdd = (reqRes) => ({
  type: types.REQRES_ADD,
  payload: reqRes,
});

export const reqResDelete = (reqRes) => ({
  type: types.REQRES_DELETE,
  payload: reqRes,
});

export const reqResUpdate = (reqRes) => ({
  type: types.REQRES_UPDATE,
  payload: reqRes,
});

export const scheduledReqResUpdate = (reqRes) => ({
  type: types.SCHEDULED_REQRES_UPDATE,
  payload: reqRes,
});

export const scheduledReqResDelete = () => ({
  type: types.SCHEDULED_REQRES_DELETE,
});

export const updateGraph = (id) => ({
  type: types.UPDATE_GRAPH,
  payload: id,
});

export const clearGraph = (reqRes) => ({
  type: types.CLEAR_GRAPH,
  payload: reqRes,
});

export const clearAllGraph = () => ({
  type: types.CLEAR_ALL_GRAPH,
});

export const setComposerWarningMessage = (message) => ({
  type: types.SET_COMPOSER_WARNING_MESSAGE,
  payload: message,
});

export const resetComposerFields = () => ({
  type: types.RESET_COMPOSER_FIELDS,
});

export const setNewRequestFields = (requestObj) => ({
  type: types.SET_NEW_REQUEST_FIELDS,
  payload: requestObj,
});

export const setNewRequestHeaders = (headers) => ({
  type: types.SET_NEW_REQUEST_HEADERS,
  payload: headers,
});

export const setNewRequestStreams = (streams) => ({
  type: types.SET_NEW_REQUEST_STREAMS,
  payload: streams,
});

export const setNewRequestBody = (body) => ({
  type: types.SET_NEW_REQUEST_BODY,
  payload: body,
});

export const setNewTestContent = (content) => ({
  type: types.SET_NEW_TEST_CONTENT,
  payload: content,
});

export const setNewRequestCookies = (cookies) => ({
  type: types.SET_NEW_REQUEST_COOKIES,
  payload: cookies,
});

export const setNewRequestSSE = (SSEBool) => ({
  type: types.SET_NEW_REQUEST_SSE,
  payload: SSEBool,
});

export const setCurrentTab = (tab) => ({
  type: types.SET_CURRENT_TAB,
  payload: tab,
});

export const setChecksAndMinis = (reqResArray) => ({
  type: types.SET_CHECKS_AND_MINIS,
  payload: reqResArray,
});

export const setIntrospectionData = (dataObj) => ({
  type: types.SET_INTROSPECTION_DATA,
  payload: dataObj,
});

export const saveCurrentResponseData = (dataObj, callingFunc) => ({
  type: types.SAVE_CURRENT_RESPONSE_DATA,
  payload: dataObj,
  callingFunc,
});

// UI ACTIONS

export const setComposerDisplay = (composerDisplay) => ({
  type: types.SET_COMPOSER_DISPLAY,
  payload: composerDisplay,
});

export const setSidebarActiveTab = (tabName) => ({
  type: types.SET_SIDEBAR_ACTIVE_TAB,
  payload: tabName,
});

export const setWorkspaceActiveTab = (tabName) => ({
  type: types.SET_WORKSPACE_ACTIVE_TAB,
  payload: tabName,
});

export const setResponsePaneActiveTab = (tabName) => ({
  type: types.SET_RESPONSE_PANE_ACTIVE_TAB,
  payload: tabName,
});

// OPENAPI ACTIONS

export const setNewRequestOpenAPI = (openapiMetadata, openapiReqArray) => ({
  type: types.SET_NEW_REQUEST_OPENAPI,
  payload: { ...args },
});
export const enableAllOpenAPI = () => ({
  type: types.ENABLE_ALL_OPENAPI,
});
export const disableAllOpenAPI = () => ({
  type: types.DISABLE_ALL_OPENAPI,
});
export const enableAllTagOpenAPI = (tag) => ({
  type: types.ENABLE_ALL_TAG_OPENAPI,
  payload: tag,
});
export const disableAllTagOpenAPI = (tag) => ({
  type: types.DISABLE_ALL_TAG_OPENAPI,
  payload: tag,
});
export const enableOpenAPIRequest = (requestId) => ({
  type: types.ENABLE_REQUEST_OPENAPI,
  payload: requestId,
});
export const disableOpenAPIRequest = (requestId) => ({
  type: types.DISABLE_REQUEST_OPENAPI,
  payload: requestId,
});
export const setOpenAPIServersGlobal = (serverIds) => ({
  type: types.SET_OPENAPI_SERVERS_GLOBAL,
  payload: serverIds,
});
export const setOpenAPIServers = (requestId, serverIds) => ({
  type: types.SET_OPENAPI_SERVERS,
  payload: {id: requestId, serverIds},
});
export const addOpenAPIParameter = (requestId) => ({
  type: types.ADD_NEW_OPENAPI_PARAMETER,
  payload: requestId,
});
export const setOpenAPIParameter = (requestId, type, key, value) => ({
  type: types.SET_NEW_OPENAPI_PARAMETER,
  payload: {id: requestId, type, key, value},
});
export const setOpenAPIRequestBody = (requestId, mediaType, requestBody) => ({
  type: types.SET_NEW_OPENAPI_REQUEST_BODY,
  payload: {id: requestId, mediaType, requestBody},
});
export const sendOpenAPIRequests = () => ({
  type: types.SEND_OPENAPI_REQUESTS,
});

