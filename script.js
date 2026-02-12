// script.js

// Video editor functionality
class VideoEditor {
    constructor() {
        this.history = [];
        this.redoStack = [];
        this.setupDragAndDrop();
        this.setupControls();
        this.setupSearch();
    }

    setupDragAndDrop() {
        const dropArea = document.getElementById('drop-area');

        dropArea.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        dropArea.addEventListener('drop', (event) => {
            event.preventDefault();
            const files = event.dataTransfer.files;
            this.handleFiles(files);
        });
    }

    handleFiles(files) {
        // Function to handle dropped files
        for (const file of files) {
            console.log('File received:', file.name);
            // Add your file processing logic here  
        }
        this.addToHistory('Dropped files');
    }

    setupControls() {
        const playButton = document.getElementById('play-button');
        const pauseButton = document.getElementById('pause-button');
        const stopButton = document.getElementById('stop-button');

        playButton.addEventListener('click', () => this.play());
        pauseButton.addEventListener('click', () => this.pause());
        stopButton.addEventListener('click', () => this.stop());
    }

    play() {
        console.log('Playing video');
        this.addToHistory('Play video');
    }

    pause() {
        console.log('Pausing video');
        this.addToHistory('Pause video');
    }

    stop() {
        console.log('Stopping video');
        this.addToHistory('Stop video');
    }

    setupSearch() {
        const searchInput = document.getElementById('search-input');

        searchInput.addEventListener('input', (event) => {
            this.searchVideo(event.target.value);
        });
    }

    searchVideo(query) {
        console.log('Searching for:', query);
    }

    addToHistory(action) {
        this.history.push(action);
        this.redoStack = [];
        console.log('History:', this.history);
    }

    undo() {
        if (this.history.length) {
            const lastAction = this.history.pop();
            this.redoStack.push(lastAction);
            console.log('Undone action:', lastAction);
        }
    }

    redo() {
        if (this.redoStack.length) {
            const redoAction = this.redoStack.pop();
            this.history.push(redoAction);
            console.log('Redone action:', redoAction);
        }
    }
}

const videoEditor = new VideoEditor();
