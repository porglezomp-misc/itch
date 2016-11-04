
import {Action} from "redux-actions";

import * as Types from "../types/db";
import {IProgressInfo} from "../types/progress";

export type IAction<T> = Action<T>;

// run upgrade operations
export const PREBOOT = "PREBOOT";
export interface IPrebootPayload {}

// actually start the app
export const BOOT = "BOOT";
export interface IBootPayload {}

export const FIRST_USEFUL_PAGE = "FIRST_USEFUL_PAGE";
export interface IFirstUsefulPagePayload {}

// Chromium is good at retrieving the user's language from the innards of the OS
// doing the same from nodejs would probably be a waste of everyone's time
export const LANGUAGE_SNIFFED = "LANGUAGE_SNIFFED";
export type ILanguageSniffedPayload = string;

export const LANGUAGE_CHANGED = "LANGUAGE_CHANGED";
export type ILanguageChangedPayload = string;

export const OPEN_MODAL = "OPEN_MODAL";
export interface IOpenModalPayload extends Types.IModal {}

export const CLOSE_MODAL = "CLOSE_MODAL";
export interface ICloseModalPayload {
  id: string;
}
export const MODAL_CLOSED = "MODAL_CLOSED";
export interface IModalClosedPayload {
  id: string;
  action: any;
}
export const MODAL_RESPONSE = "MODAL_RESPONSE";
export interface IModalResponsePayload {}

export const SETUP_STATUS = "SETUP_STATUS";
export interface ISetupStatusPayload extends Types.ISetupOperation {};

export const SETUP_DONE = "SETUP_DONE";
export interface ISetupDonePayload {};

export const RETRY_SETUP = "RETRY_SETUP";
export interface IRetrySetupPayload {};

export const SESSION_READY = "SESSION_READY";
export interface ISessionReadyPayload {}

export const SESSIONS_REMEMBERED = "SESSIONS_REMEMBERED";
export interface ISessionsRememberedPayload extends Types.IRememberedSessionsState {}

export const SESSION_UPDATED = "SESSION_UPDATED";
export interface ISessionUpdatedPayload {
  /** the session to update (user id) */
  id: string;
  
  /** new/updated fields (can't delete fields) */
  record: Types.IRememberedSession;
}

export const FORGET_SESSION_REQUEST = "FORGET_SESSION_REQUEST";
export interface IForgetSessionRequestPayload {
  /** the session to forget (user id) */
  id: string;

  username: string;
}

export const FORGET_SESSION = "FORGET_SESSION";
export interface IForgetSessionPayload extends IForgetSessionRequestPayload {}

export const START_ONBOARDING = "START_ONBOARDING";
export interface IStartOnboardingPayload {}

export const EXIT_ONBOARDING = "EXIT_ONBOARDING";
export interface IExitOnboardingPayload {}

export const GLOBAL_DB_COMMIT = "GLOBAL_DB_COMMIT";
export const GLOBAL_DB_READY = "GLOBAL_DB_READY";
export const GLOBAL_DB_CLOSED = "GLOBAL_DB_CLOSED";

export const USER_DB_COMMIT = "USER_DB_COMMIT";
export const USER_DB_READY = "USER_DB_READY";
export const USER_DB_CLOSED = "USER_DB_CLOSED";

export interface IDbReadyPayload {}
export interface IDbCommitPayload {
  updated: Types.IEntityMap;
  deleted: Types.IEntityRefs;
  initial: boolean;
}
export interface IDbClosedPayload {}

/* Background stuff */
export const DISMISS_HISTORY_ITEM = "DISMISS_HISTORY_ITEM";
export interface IDismissHistoryItemPayload {
  /** the item to dismiss */
  id: string;
}
export const QUEUE_HISTORY_ITEM = "QUEUE_HISTORY_ITEM";
export interface IQueueHistoryItemPayload extends Types.IHistoryItem {};
export const HISTORY_READ = "HISTORY_READ";
export interface IHistoryReadPayload {};

/* Main window events */
export const FIRST_WINDOW_READY = "FIRST_WINDOW_READY";
export interface IFirstWindowReadyPayload {}

export const WINDOW_READY = "WINDOW_READY";
export interface IWindowReadyPayload {
  id: number;
}

export const WINDOW_DESTROYED = "WINDOW_DESTROYED";
export interface IWindowDestroyedPayload {}

export const WINDOW_FOCUS_CHANGED = "WINDOW_FOCUS_CHANGED";
export interface IWindowFocusChangedPayload {
  focused: boolean;
}

export const WINDOW_FULLSCREEN_CHANGED = "WINDOW_FULLSCREEN_CHANGED";
export interface IWindowFullscreenChangedPayload {
  fullscreen: boolean;
}

export const WINDOW_BOUNDS_CHANGED = "WINDOW_BOUNDS_CHANGED";
export interface IWindowBoundsChangedPaylaod {}

export const CREATE_WINDOW = "CREATE_WINDOW";
export interface ICreateWindowPayload {}

export const FOCUS_WINDOW = "FOCUS_WINDOW";
export interface IFocusWindowPayload {}

export const HIDE_WINDOW = "HIDE_WINDOW";
export interface IHideWindowPayload {}

export const CLOSE_TAB_OR_AUX_WINDOW = "CLOSE_TAB_OR_AUX_WINDOW";
export interface ICloseTabOrAuxWindowPaylaod {}

export const CLOSE_ALL_TABS = "CLOSE_ALL_TABS";
export interface ICloseAllTabsPayload {}

/* Navigation */
export const NAVIGATE = "NAVIGATE";
export interface INavigatePayload {
  /** tab to navigate to */
  id: string;

  /** any data we already known about the tab */
  data: Types.ITabData;

  /** whether to open a new tab in the background */
  background: boolean;
}

export const FOCUS_NTH_TAB = "FOCUS_NTH_TAB";
export interface IFocusNthTabPayload {}

export const MOVE_TAB = "MOVE_TAB";
export interface IMoveTabPayload {
  /** old tab index (in transients) */
  before: number;
  /** new tab index (in transients) */
  after: number;
}

export const EVOLVE_TAB = "EVOLVE_TAB";
export interface IEvolveTabPayload {}

export const TAB_EVOLVED = "TAB_EVOLVED";
export interface ITabEvolvedPayload {
  /** the tab that evolved (maybe went from a boring web tab to a game tab) */
  id: string;

  /** the new data we got on it */
  data: Types.ITabData;
}

export const NEW_TAB = "NEW_TAB";

export const CLOSE_TAB = "CLOSE_TAB";
/** if null, close current tab */
export type ICloseTabPayload = string

export const SHOW_PREVIOUS_TAB = "SHOW_PREVIOUS_TAB";
export interface IShowPreviousTabPayload {}

export const SHOW_NEXT_TAB = "SHOW_NEXT_TAB";
export interface IShowNextTabPayload {}

export const SWITCH_PAGE = "SWITCH_PAGE";
export type ISwitchPagePayload = string;

export const OPEN_URL = "OPEN_URL";
export type IOpenUrlPayload = string;

export const REPORT_ISSUE = "REPORT_ISSUE";
export interface IReportIssuePayload {
  log?: string;
}

export const COPY_TO_CLIPBOARD = "COPY_TO_CLIPBOARD";
export interface ICopyToClipboardPayload {}

export const HANDLE_ITCHIO_URL = "HANDLE_ITCHIO_URL";
export interface IHandleItchioUrlPayload {
  /** example: itchio:///games/3 */
  uri: string;
}

export const TRIGGER_MAIN_ACTION = "TRIGGER_MAIN_ACTION";
export interface ITriggerMainActionPayload {}

export const TRIGGER_OK = "TRIGGER_OK";
export interface ITriggerOkPayload {}

export const TRIGGER_BACK = "TRIGGER_BACK";
export interface ITriggerBackPayload {}

export const TRIGGER_LOCATION = "TRIGGER_LOCATION";
export interface ITriggerLocationPayload {}

export const SHORTCUTS_VISIBILITY_CHANGED = "SHORTCUTS_VISIBILITY_CHANGED";
export interface IShortcutsVisibilityChangedPayload {
  visible: boolean;
}

export const TOGGLE_MINI_SIDEBAR = "TOGGLE_MINI_SIDEBAR";

export const TAB_RELOADED = "TAB_RELOADED";

export const TAB_CHANGED = "TAB_CHANGED";
export interface ITabChangedPayload {
  /** the newly active tab */
  id: string;
}

export const TABS_CHANGED = "TABS_CHANGED";

export const TABS_RESTORED = "TABS_RESTORED";
export interface ITabsRestoredPayload {
  /** current tab id at the time the snapshot was taken */
  current: string;

  /** list of transient tabs when the snapshot was taken */
  items: Types.ITabDataSave[];
}

export const TAB_DATA_FETCHED = "TAB_DATA_FETCHED";
export interface ITabDataFetchedPayload {
  /** tab for which we fetched data */
  id: string;

  /** the data we fetched */
  data: Types.ITabData;

  /** when we started fetching it */
  timestamp: number;
}

export const OPEN_TAB_CONTEXT_MENU = "OPEN_TAB_CONTEXT_MENU";
export interface IOpenTabContextMenuPayload {
  /** id of the tab to open the context menu of */
  id: string;
}

/** show a constant tab hidden for some users (press, dashboard, etc.) */
export const UNLOCK_TAB = "UNLOCK_TAB";
export interface IUnlockTabPayload {
  /** the path of the tab to unlock (press, dashboard, etc.) */
  path: string;
}

/* Application menu */
export const REFRESH_MENU = "REFRESH_MENU";
export interface IRefreshMenuPayload {
  system: Types.ISystemState;
  credentials: Types.ISessionCredentialsState;
}

/** Buh-bye */
export const PREPARE_QUIT = "PREPARE_QUIT";
export interface IPrepareQuitPayload {}

export const QUIT = "QUIT";
export interface IQuitPayload {}

export const QUIT_WHEN_MAIN = "QUIT_WHEN_MAIN";
export interface IQuitWhenMainPayload {}

export const QUIT_ELECTRON_APP = "QUIT_ELECTRON_APP";
export interface IQuitElectronAppPayload {}

export const QUIT_AND_INSTALL = "QUIT_AND_INSTALL";
export interface IQuitAndInstallPayload {}

/* Self updates */
export const CHECK_FOR_SELF_UPDATE = "CHECK_FOR_SELF_UPDATE";
export interface ICheckForSelfUpdatePayload {};

export const CHECKING_FOR_SELF_UPDATE = "CHECKING_FOR_SELF_UPDATE";
export interface ICheckingForSelfUpdatePayload {};

export const SELF_UPDATE_AVAILABLE = "SELF_UPDATE_AVAILABLE";
export interface ISelfUpdateAvailablePayload {
  /** info on the self-update that's available */
  spec: Types.ISelfUpdate;

  /** whether the self-update is being immediately downloaded */
  downloading: boolean;
};

export const SELF_UPDATE_NOT_AVAILABLE = "SELF_UPDATE_NOT_AVAILABLE";
export interface ISelfUpdateNotAvailablePayload {
  /**
   * true if it also means we're up-to-date — false if, for example,
   * we were offline and couldn't check (that doesn't count as an error)
   */
  uptodate: boolean;
};

export const SELF_UPDATE_ERROR = "SELF_UPDATE_ERROR";
export type ISelfUpdateErrorPayload = string;

export const SELF_UPDATE_DOWNLOADED = "SELF_UPDATE_DOWNLOADED";
export interface ISelfUpdateDownloadedPayload {};

export const SHOW_AVAILABLE_SELF_UPDATE = "SHOW_AVAILABLE_SELF_UPDATE";
export interface IShowAvailableSelfUpdatePayload {};

export const APPLY_SELF_UPDATE = "APPLY_SELF_UPDATE";
export interface IApplySelfUpdatePayload {};

export const APPLY_SELF_UPDATE_REQUEST = "APPLY_SELF_UPDATE_REQUEST";
export interface IApplySelfUpdateRequestPayload {};

export const SNOOZE_SELF_UPDATE = "SNOOZE_SELF_UPDATE";
export interface ISnoozeSelfUpdatePayload {};

export const DISMISS_STATUS = "DISMISS_STATUS";
export interface IDismissStatusPayload {};

export const STATUS_MESSAGE = "STATUS_MESSAGE";
export interface IStatusMessagePayload {};

export const DISMISS_STATUS_MESSAGE = "DISMISS_STATUS_MESSAGE";
export interface IDismissStatusMessagePayload {};

export const ENABLE_BONUS = "ENABLE_BONUS";
export interface IEnableBonusPayload {
  name: string;
}
export const DISABLE_BONUS = "DISABLE_BONUS";
export interface IDisableBonusPayload {
  name: string;
}

/* Locales */
export const LOCALES_CONFIG_LOADED = "LOCALES_CONFIG_LOADED";
export interface ILocalesConfigLoadedPayload {
  strings: Types.II18nResources;
};

export const QUEUE_LOCALE_DOWNLOAD = "QUEUE_LOCALE_DOWNLOAD";
export interface IQueueLocaleDownloadPayload {
  lang: string;
};

export const LOCALE_DOWNLOAD_STARTED = "LOCALE_DOWNLOAD_STARTED";
export interface ILocaleDownloadStartedPayload {
  lang: string;
};

export const LOCALE_DOWNLOAD_ENDED = "LOCALE_DOWNLOAD_ENDED";
export interface ILocaleDownloadEndedPayload {
  lang: string;
  resources: any;
};

/* Install locations */
export const BROWSE_INSTALL_LOCATION = "BROWSE_INSTALL_LOCATION";
export interface IBrowseInstallLocationPayload {}

export const ADD_INSTALL_LOCATION_REQUEST = "ADD_INSTALL_LOCATION_REQUEST";
export interface IAddInstallLocationRequestPayload {}

export const ADD_INSTALL_LOCATION = "ADD_INSTALL_LOCATION";
export interface IAddInstallLocationPayload {}

export const REMOVE_INSTALL_LOCATION_REQUEST = "REMOVE_INSTALL_LOCATION_REQUEST";
export interface IRemoveInstallLocationRequestPayload {}

export const REMOVE_INSTALL_LOCATION = "REMOVE_INSTALL_LOCATION";
export interface IRemoveInstallLocationPayload {}

export const MAKE_INSTALL_LOCATION_DEFAULT = "MAKE_INSTALL_LOCATION_DEFAULT";
export interface IMakeInstallLocationDefaultPayload {}

export const QUERY_FREE_SPACE = "QUERY_FREE_SPACE";
export interface IQueryFreeSpacePayload {};

export const FREE_SPACE_UPDATED = "FREE_SPACE_UPDATED";
export interface IFreeSpaceUpdatedPayload {
  diskInfo: Types.IPartsInfo;
};

/* Tasks */
export const TASK_STARTED = "TASK_STARTED";
export interface ITaskStartedPayload {
  name: string;
  id: string;
};
export const TASK_PROGRESS = "TASK_PROGRESS";
export interface ITaskProgressPayload extends IProgressInfo {
  /** the task this progress info is for */
  id: string;
};
export const TASK_ENDED = "TASK_ENDED";
export interface ITaskEndedPayload {
  name: string;
  id: string;
  err: string;
  result: any;
  taskOpts: any; // TODO: type better
};

export const ABORT_TASK = "ABORT_TASK";
export interface IAbortTaskPayload {
  id: string;
};

/* Downloads */
export const QUEUE_DOWNLOAD = "QUEUE_DOWNLOAD";
export interface IQueueDownloadPayload {}

export const DOWNLOAD_STARTED = "DOWNLOAD_STARTED";
export interface IDownloadStartedPayload extends Types.IDownloadItem {};

export const DOWNLOAD_PROGRESS = "DOWNLOAD_PROGRESS";
export interface IDownloadProgressPayload extends IProgressInfo {
  /** the download in progress */
  id: string;
};

export const DOWNLOAD_ENDED = "DOWNLOAD_ENDED";
export interface IDownloadEndedPayload {
  /** the download that just ended */
  id: string;

  /** an error, if any */
  err: string;

  /** the original download options */
  downloadOpts: Types.IDownloadOpts;
}

export const DOWNLOAD_SPEED_DATAPOINT = "DOWNLOAD_SPEED_DATAPOINT";
export interface IDownloadSpeedDatapointPayload {
  /** how many bytes we've downloaded in the last second */
  bps: number;
}

export const CLEAR_FINISHED_DOWNLOADS = "CLEAR_FINISHED_DOWNLOADS";
export interface IClearFinishedDownloadsPayload {}

export const PRIORITIZE_DOWNLOAD = "PRIORITIZE_DOWNLOAD";
export interface IPrioritizeDownloadPayload {
  /** the download to prioritize */
  id: string;
}

export const CANCEL_DOWNLOAD = "CANCEL_DOWNLOAD";
export interface ICancelDownloadPayload {
  id: string;
}

export const PAUSE_DOWNLOADS = "PAUSE_DOWNLOADS";
export interface IPauseDownloadsPayload {}

export const RESUME_DOWNLOADS = "RESUME_DOWNLOADS";
export interface IResumeDownloadsPayload {}

export const RETRY_DOWNLOAD = "RETRY_DOWNLOAD";
export interface IRetryDownloadPayload {
  downloadOpts: Types.IDownloadOpts;
}

export const CLEAR_GAME_DOWNLOADS = "CLEAR_GAME_DOWNLOADS";
export interface IClearGameDownloadsPayload {
  gameId: number;
}

/** User requested game to be uninstalled */
export const REQUEST_CAVE_UNINSTALL = "REQUEST_CAVE_UNINSTALL";
export interface IRequestCaveUninstallPayload {}

/** Cave is going to be uninstalled */
export const QUEUE_CAVE_UNINSTALL = "QUEUE_CAVE_UNINSTALL";
export interface IQueueCaveUninstallPayload {
  /** id of the cave to uninstall */
  caveId: string;
}

/** Cave is going to be reinstalled */
export const QUEUE_CAVE_REINSTALL = "QUEUE_CAVE_REINSTALL";
export interface IQueueCaveReinstallPayload {
  /** id of the cave to reinstall */
  caveId: string;
}

/** Delete cave from local db */
export const IMPLODE_CAVE = "IMPLODE_CAVE";
export interface IImplodeCavePayload {
  /** id of the cave to implode */
  caveId: string;
}

/** Deprecated. TODO: remove */
export const CANCEL_CAVE = "CANCEL_CAVE";
export interface ICancelCavePayload {}

/** Cave has been deleted from local db */
export const CAVE_THROWN_INTO_BIT_BUCKET = "CAVE_THROWN_INTO_BIT_BUCKET";
export interface ICaveThrownIntoBitBucketPayload {}

/** Show local files */
export const EXPLORE_CAVE = "EXPLORE_CAVE";
export interface IExploreCavePayload {
  /** id of the cave to explore */
  caveId: string;
}

/** Show cave logs */
export const PROBE_CAVE = "PROBE_CAVE";
export interface IProbeCavePayload {}

/** Open issue on github with cave logs */
export const REPORT_CAVE = "REPORT_CAVE";
export interface IReportCavePayload {}

/** Can't install .deb, .rpm, etc. */
export const SHOW_PACKAGING_POLICY = "SHOW_PACKAGING_POLICY";
export interface IShowPackagingPolicyPayload {}

/** A game has been interacted with! */
export const RECORD_GAME_INTERACTION = "RECORD_GAME_INTERACTION";
export interface IRecordGameInteractionPayload {}

export const ABORT_GAME_REQUEST = "ABORT_GAME_REQUEST";
export interface IAbortGameRequestPayload {
  /** the game we want to force-quit */
  gameId: number;
}

export const ABORT_LAST_GAME = "ABORT_LAST_GAME";
export interface IAbortLastGamePayload {}

export const ABORT_GAME = "ABORT_GAME";
export interface IAbortGamePayload extends IAbortGameRequestPayload {}

export const CHECK_FOR_GAME_UPDATE = "CHECK_FOR_GAME_UPDATE";
export interface ICheckForGameUpdatePayload {
  /** which cave to check for an update */
  caveId: string;

  /** display a notification if the game is up-to-date. otherwise, stay silent */
  noisy: boolean;
}

export const CHECK_FOR_GAME_UPDATES = "CHECK_FOR_GAME_UPDATES";
export interface ICheckForGameUpdatesPayload {}

/** User requested game to be installed */
export const QUEUE_GAME = "QUEUE_GAME";
export interface IQueueGamePayload {
  /** the game we want to download */
  game: Types.IGameRecord;

  /** when manually picking which upload to download, the id of the upload the user picked */
  pickedUpload?: number;

  /** any extra download options */
  extraOpts: {};
}

/** Open a game's page */
export const BROWSE_GAME = "BROWSE_GAME";
export interface IBrowseGamePayload {}

/** Buy / support something! */
export const INITIATE_PURCHASE = "INITIATE_PURCHASE";
export interface IInitiatePurchasePayload {
  game: Types.IGameRecord;
}

export const PURCHASE_COMPLETED = "PURCHASE_COMPLETED";
export interface IPurchaseCompletedPayload {}

export const ENCOURAGE_GENEROSITY = "ENCOURAGE_GENEROSITY";
export interface IEncourageGenerosityPayload {}

export const INITIATE_SHARE = "INITIATE_SHARE";
export interface IInitiateSharePayload {
  url: string;
}

/** macOS-only, bounce dock */
export const BOUNCE = "BOUNCE";
export interface IBouncePayload {}

/** Cross-platform, notification bubble */
export const NOTIFY = "NOTIFY";
export interface INotifyPayload {}

export const NOTIFY_HTML5 = "NOTIFY_HTML5";
export interface INotifyHtml5Payload {}

/** Search */
export const FOCUS_SEARCH = "FOCUS_SEARCH";
export interface IFocusSearchPayload {};

export const FOCUS_FILTER = "FOCUS_FILTER";
export interface IFocusFilterPayload {};

export const CLEAR_FILTERS = "CLEAR_FILTERS";
export interface IClearFiltersPayload {};

export const SEARCH_QUERY_CHANGED = "SEARCH_QUERY_CHANGED";
export interface ISearchQueryChangedPayload {};

export const SEARCH = "SEARCH";
export interface ISearchPayload {};

export const SEARCH_FETCHED = "SEARCH_FETCHED";
export interface ISearchFetchedPayload {
  query: string;
  results: any;
};

export const SEARCH_STARTED = "SEARCH_STARTED";
export interface ISearchStartedPayload {};

export const SEARCH_FINISHED = "SEARCH_FINISHED";
export interface ISearchFinishedPayload {};

export const CLOSE_SEARCH = "CLOSE_SEARCH";
export interface ICloseSearchPayload {};

export const SEARCH_HIGHLIGHT_OFFSET = "SEARCH_HIGHLIGHT_OFFSET";
export type ISearchHighlightOffsetPayload = number;

export const FILTER_CHANGED = "FILTER_CHANGED";
export interface IFilterChangedPayload {
  /** which tab is being filtered */
  tab: string;
  /** text by which a tab is being filtered */
  query: string;
};

export const BINARY_FILTER_CHANGED = "BINARY_FILTER_CHANGED";
export interface IBinaryFilterChangedPayload {
  /** name of the binary filter */
  field: string;
  /** new value for the boolean filter */
  value: boolean;
};

/** Data retrieval */
export const FETCH_COLLECTION_GAMES = "FETCH_COLLECTION_GAMES";
export interface IFetchCollectionGamesPayload {
  /** The collection we want to fetch the games of */
  collectionId: number;
}
export const COLLECTION_GAMES_FETCHED = "COLLECTION_GAMES_FETCHED";
export interface ICollectionGamesFetchedPayload {
  /** The collection whose games were just fetched */
  collectionId: number;
}

/** Start picking from a list of remembered sessions */
export const LOGIN_START_PICKING = "LOGIN_START_PICKING";
export interface ILoginStartPickingPayload {};

/** Go back to username/password form to add new login */
export const LOGIN_STOP_PICKING = "LOGIN_STOP_PICKING";
export interface ILoginStopPickingPayload {};

/** Any login attempt (cached or not) */
export const ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
export interface IAttemptLoginPayload {}

/** Private - login attempt with username/password */
export const LOGIN_WITH_PASSWORD = "LOGIN_WITH_PASSWORD";
export interface ILoginWithPasswordPayload {
  /** the username or e-mail for the itch.io account to log in as */
  username: string;

  /** the password for the itch.io account to log in as */
  password: string;
}

/** Private - login attempt with stored token */
export const LOGIN_WITH_TOKEN = "LOGIN_WITH_TOKEN";
export interface ILoginWithTokenPayload {
  /** the username or e-mail for the itch.io account to log in as */
  username: string;

  /** an API token for the itch.io account to log in as */
  key: string;

  /** loginWithToken is used for remembered sessions - we already have user info for those */
  me: Types.IOwnUserRecord;
}

/** Wrong login/password or something else */
export const LOGIN_FAILED = "LOGIN_FAILED";
export interface ILoginFailedPayload {
  /** the username we couldn't log in as (useful to prefill login form for retry) */
  username: string;

  /** a list of errors that occured while logging in */
  errors: string[];
}

/** API key available beyond this point */
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export interface ILoginSucceededPayload {
  key: string;
  me: Types.IOwnUserRecord;
}

/** market available beyond this point */
export const READY_TO_ROLL = "READY_TO_ROLL";
export interface IReadyToRollPayload {}

/** install locations available beyond this point */
export const LOCATIONS_READY = "LOCATIONS_READY";
export interface ILocationsReadyPayload {}

/** Asked to log out */
export const CHANGE_USER = "CHANGE_USER";
export interface IChangeUserPayload {}

/** Confirmed log out */
export const LOGOUT = "LOGOUT";
export interface ILogoutPayload {}

/** Sent from metal when needs to eval something in chrome. Example: HTML5 Notification API */
export const EVAL = "EVAL";
export interface IEvalPayload {}

/** Sent when app is about to reboot or shutdown */
export const IMPLODE_APP = "IMPLODE_APP";
export interface IImplodeAppPayload {}

/** GC unused database entries */
export const GC_DATABASE = "GC_DATABASE";
export interface IGcDatabasePayload {}

/* Preferences */
export const OPEN_PREFERENCES = "OPEN_PREFERENCES";
export interface IOpenPreferencesPayload {}

export const PREFERENCES_SET_LANGUAGE = "PREFERENCES_SET_LANGUAGE";
export interface IPreferencesSetLanguagePayload {}

export const UPDATE_PREFERENCES = "UPDATE_PREFERENCES";
export interface IUpdatePreferencesPayload extends Types.IPreferencesState {};

export const VIEW_CREATOR_PROFILE = "VIEW_CREATOR_PROFILE";
export interface IViewCreatorProfilePayload {}

export const VIEW_COMMUNITY_PROFILE = "VIEW_CREATOR_PROFILE";
export interface IViewCommunityProfilePayload {}
