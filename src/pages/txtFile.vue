<template>
  <div class="card">
    <div class="card-header">
      <h5 class="title">App Information</h5>
    </div>
    <div class="card-body">
      <!-- Multiple fields with labels centered horizontally -->
      <div class="input-container">
        <div class="input-group row">
          <!-- Horizontal center alignment for label -->
          <label for="appName" class="label">App Name:</label>
          <input type="text" id="appName" v-model="appName" required />
        </div>
        <div class="input-group row">
          <label for="appPackageName" class="label">App Package Name:</label>
          <input type="text" id="appPackageName" v-model="appPackageName" required />
          <label class="ml-2" style="font-size: 15px;">.android.app</label>
        </div>
        <div class="input-group row">
          <label for="appType" class="label">App Type:</label>
          <input type="text" id="appType" v-model="appType" required />
        </div>
        <div class="input-group row">
          <label for="location" class="label">Location:</label>
          <input type="text" id="location" v-model="location" required />
        </div>
        <div class="input-group row">
          <label for="appStoreRanking" class="label">App Store Ranking:</label>
          <input type="number" id="appStoreRanking" v-model="appStoreRanking" required />
        </div>
      </div>

      <!-- File upload and action buttons -->
      <div class="file-upload">
        <input type="file" @change="onFileChange" multiple />
      </div>
      <div class="d-flex button-container">
        <button class="mr-3" @click="saveToLocalStorage">Save to Local Storage</button>
        <button class="mr-3" @click="restoreFromLocalStorage">Restore from Local Storage</button>
        <button @click="downloadFileNames" :disabled="files.length === 0 || !appName">
          Download File Information
        </button>

      </div>

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
  mounted() {
    this.restoreFromLocalStorage();
  },
  computed: {
    fullAppPackageName() {
      // Ensure the app package name ends with ".android.app"
      if (this.appPackageName.endsWith(".android.app")) {
        return this.appPackageName;
      } else {
        return `${this.appPackageName}.android.app`;
      }
    },
  },
  methods: {
    onFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    onFileChange(event) {
      this.files = Array.from(event.target.files);
    },
    downloadFileNames() {
      // Use the computed package name to get the correct filename
      const fileName = this.fullAppPackageName ? `${this.fullAppPackageName}.txt` : 'app_info.txt';

      // Content for the text file
      let fileContent = `1. App Information:\n`;
      fileContent += `   - App Name: ${this.appName}\n`;
      fileContent += `   - App Package Name: ${this.fullAppPackageName}\n`;
      fileContent += `   - App Type: ${this.appType || 'N/A'}\n`;
      fileContent += `   - Location: ${this.location || 'N/A'}\n`;
      fileContent += `   - App Store Ranking: ${this.appStoreRanking || 'N/A'}\n\n`;

      fileContent += `2. Testing Notes:\n`;
      this.files.forEach((file, index) => {
        fileContent += `   - Screenshot ${String(index + 1).padStart(2, '0')}: ${file.name}\n`;
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
        appName: this.appName,
        appPackageName: this.fullAppPackageName,
        appType: this.appType,
        location: this.location,
        appStoreRanking: this.appStoreRanking,
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
