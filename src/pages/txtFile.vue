<template>
  <div class="card">
    <div class="card-header">
      <h5 class="title">App Information</h5>
    </div>
    <div class="card-body">
      <!-- Multiple fields with labels centered horizontally -->
      <form @submit.prevent="downloadFileNames">
        <div class="input-container">
          <div class="input-group row">
            <!-- Horizontal center alignment for label -->
            <label for="appName" class="label">App Name:</label>
            <input type="text" id="appName" v-model="appName" required @keydown.enter="focusNextInput(1)" />
            
          </div>
          <div class="input-group row">
            <label for="appPackageName" class="label">App Package Name:</label>
            <input type="text" id="appPackageName" v-model="appPackageName" required @keydown.enter="focusNextInput(2)" />

          </div>
          <div class="input-group row">
            <label for="appType" class="label">App Type:</label>
            <input type="text" id="appType" v-model="appType" required @keydown.enter="focusNextInput(3)"/>
          </div>
          <div class="input-group row">
            <label for="location" class="label">Location:</label>
            <input type="text" id="location" v-model="location" required @keydown.enter="focusNextInput(4)"/>
          </div>
          <div class="input-group row">
            <label for="appStoreRanking" class="label">App Store Ranking:</label>
            <input type="number" id="appStoreRanking" v-model="appStoreRanking" required @keydown.enter="focusNextInput(5)"/>
          </div>
        </div>

        <!-- File upload and action buttons -->
        <div class="file-upload">
          <input type="file" @change="onFileChange" multiple   />
        </div>
        <div class="d-flex button-container">
          <button type="button" class="mr-3" @click="saveToLocalStorage">Save Location</button>
          <button type="button" class="mr-3" @click="restoreFromLocalStorage">Restore Location</button>
          <button type="submit" :disabled="files.length === 0 || !appName">
            Download File Information
          </button>

        </div>
      </form>


    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      appName: '',
      appPackageName: '',
      appType: '',
      location: '',
      appStoreRanking: '',
    };
  },
  methods: {
    focusNextInput(index) {
      const elements = this.$el.querySelectorAll("input, button");
      if (index < elements.length) {
        elements[index].focus();
      }
    },
    onFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    onFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    downloadFileNames() {
      const fileName = this.appPackageName ? `${this.appPackageName}.txt` : 'app_info.txt';

      let fileContent = `1. App Information:\n`;
      fileContent += `   - App Name: ${this.appName}\n`;
      fileContent += `   - App Package Name: ${this.appPackageName}\n`;
      fileContent += `   - App Type: ${this.appType}\n`;
      fileContent += `   - Location: ${this.location}\n`;
      fileContent += `   - App Store Ranking: ${this.appStoreRanking}\n\n`;

      fileContent += `2. Testing Notes:\n`;
      this.files.forEach((file, index) => {
        // Get the base filename without the extension
        const baseFileName = file.name.split(".").slice(0, -1).join(".");
        // Remove any leading numbers and underscores
        const nameWithoutPrefix = baseFileName.replace(/^[0-9]+_/, "");  // Extract just the descriptive name
        const formattedName = nameWithoutPrefix;

        fileContent += `   - Screenshot ${String(index + 1).padStart(2, '0')}: ${formattedName}\n`;
      });

      const blob = new Blob([fileContent], { type: 'text/plain' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;

      link.click();

      URL.revokeObjectURL(link.href);
    },
    saveToLocalStorage() {
      const data = {
        location: this.location,
      };

      localStorage.setItem("appInfo", JSON.stringify(data));
    },
    restoreFromLocalStorage() {
      const data = localStorage.getItem("appInfo");

      if (data) {
        const parsedData = JSON.parse(data);
        this.appName = parsedData.appName || '';
        this.appPackageName = parsedData.appPackageName || '';
        this.appType = parsedData.appType || '';
        this.location = parsedData.location || '';
        this.appStoreRanking = parsedData.appStoreRanking || '';
      }
    },

  },
};
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.input-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* Vertical alignment */
}

.label {
  flex: 0 0 150px;
  /* Fixed width for consistent alignment */
  text-align: center;
  /* Horizontal center */
}

input {
  width: 50%;
  padding: 5px;
  border: 1px solid #ccc;
}

.file-upload,
.button-container,
.download-button {
  margin-top: 10px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
