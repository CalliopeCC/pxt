declare namespace pxt.Cloud {
    export interface JsonScriptMeta {
        blocksWidth?: number;
        blocksHeight?: number;
        versions?: TargetVersions;
    }
}

declare namespace pxt.workspace {
    export interface InstallHeader {
        name: string; // script name, should always be in sync with pxt.json name
        meta: pxt.Cloud.JsonScriptMeta; // script meta data
        editor: string; // editor that we're in
        board?: string; // name of the package that contains the board.json info
        temporary?: boolean; // don't serialize project
        // older script might miss this
        target: string;
        // older scripts might miss this
        targetVersion: string;
        pubId: string; // for published scripts
        pubCurrent: boolean; // is this exactly pubId, or just based on it
        pubVersions?: PublishVersion[];
        pubPermalink?: string; // permanent (persistent) share ID
        githubId?: string;
        githubTag?: string; // the release tag if any (commit.tag)
        githubCurrent?: boolean;
        // in progress tutorial if any
        tutorial?: pxt.tutorial.TutorialOptions;
        // completed tutorial info if any
        tutorialCompleted?: pxt.tutorial.TutorialCompletionInfo;
        // workspace guid of the extension under test
        extensionUnderTest?: string;
        // id of cloud user who created this project
        cloudUserId?: string;
        isSkillmapProject?: boolean;
    }

    export interface Header extends InstallHeader {
        id: string; // guid (generated by us)
        path?: string; // for workspaces that require it
        recentUse: number; // seconds since epoch
        modificationTime: number; // seconds since epoch
        icon?: string; // icon uri

        isDeleted: boolean; // mark whether or not a header has been deleted
        saveId?: any; // used to determine whether a project has been edited while we're saving to cloud

        // For cloud sync (local only metadata)
        cloudVersion: string;     // The cloud-assigned version number (e.g. etag)
        cloudCurrent: boolean;    // Has the current version of the project been pushed to cloud
        cloudLastSyncTime: number; // seconds since epoch

        // Used for Updating projects
        backupRef?: string; // guid of backed-up project (present if an update was interrupted)
        isBackup?: boolean; // True if this is a backed-up project (for a pending update)

        // Other
        _rev: string; // used for idb / pouchdb revision tracking
    }

    interface PublishVersion {
        id: string;
        type: "snapshot" | "permalink";
    }
}