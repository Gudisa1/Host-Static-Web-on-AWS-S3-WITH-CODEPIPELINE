
---

# Static Website Deployment using AWS CodePipeline

This project demonstrates the process of deploying a **static website** (including HTML, CSS, and JavaScript files) from a **GitHub repository** to an **AWS S3 bucket** using **AWS CodePipeline**. The deployment process involves setting up the pipeline, configuring the source (GitHub), building the artifact, and deploying it to S3 for static website hosting.

## Project Overview

This project consists of the following main steps:

1. **GitHub Repository Setup**: Hosting the static website files (HTML, CSS, JS) on GitHub.
2. **AWS S3 Bucket Setup**: Creating an S3 bucket to host the static website.
3. **AWS CodePipeline Setup**: Automating the deployment process using AWS CodePipeline, where:
   - Code is pulled from GitHub.
   - Code is packaged into an artifact.
   - The artifact is deployed to S3.

## Steps to Set Up the Deployment

### 1. **Prerequisites**
   Before starting, make sure you have:
   - An AWS account.
   - AWS CLI installed and configured with necessary credentials.
   - A GitHub repository containing your static website files (e.g., `index.html`, CSS, JS).

### 2. **Create an S3 Bucket for Static Website Hosting**
   - Navigate to the **S3** service in the AWS Management Console.
   - Create a new bucket (e.g., `static-web-gudisa`).
   - Enable **static website hosting** under the bucket properties.
   - Set the **index document** (e.g., `index.html`) and **error document** (e.g., `error.html`).

### 3. **Set Up the AWS CodePipeline**
   - **Create a new CodePipeline** in the AWS Management Console.
   - **Choose a source provider**:
     - Select **GitHub** as the source.
     - Connect to your GitHub account, and choose the repository and branch you want to deploy from.
     - You may need to set up a GitHub OAuth connection if you haven't already.
   - **Choose the build provider** (Optional):
     - If you're using CodeBuild for any pre-processing or build tasks, configure it here.
     - For a simple static website, you can skip this step and directly deploy to S3 from the source.
   - **Deploy to S3**:
     - Choose **Amazon S3** as the deploy provider.
     - Select the bucket you created (`static-web-gudisa`).
     - Enable **Extract file before deploy** to unzip the artifact before deployment.

### 4. **Configure the Pipeline Stage**
   - **Source Stage**:
     - **Provider**: GitHub.
     - **Repository**: Select your repository from GitHub.
     - **Branch**: Typically, you will use the `main` branch, but you can choose a different one.
   - **Deploy Stage**:
     - **Provider**: Amazon S3.
     - **Bucket**: Choose the bucket you created (`static-web-gudisa`).
     - **Deployment Path**: Optional. If you want to deploy to a subdirectory, specify a path (e.g., `/website/`).
     - **Extract Files**: Enable this option to unzip the files before deploying.

### 5. **Configure Permissions**
   Ensure that the **IAM role** used by CodePipeline has sufficient permissions to access:
   - The GitHub repository (for the source stage).
   - The S3 bucket (for deployment).

### 6. **Run the Pipeline**
   - After completing the configuration, run the pipeline.
   - CodePipeline will automatically trigger the deployment when a change is detected in your GitHub repository.
   - The pipeline will pull the latest code from GitHub, package it, and deploy it to S3.

### 7. **Access Your Static Website**
   - Once the deployment is complete, navigate to the **S3 bucket URL** to view your static website.
   - If you’ve enabled static website hosting, the URL will look like this:
     ```
     http://static-web-gudisa.s3-website-us-east-1.amazonaws.com/
     ```

## Example Directory Structure in GitHub
Your GitHub repository should have a structure similar to the following:
```
/static-website
    /index.html
    /styles.css
    /script.js
```

## CodePipeline Flow Diagram

Below is a simplified flow of how CodePipeline works:

```
GitHub (Source) → CodePipeline (Build) → S3 (Deploy)
```

1. **GitHub**: Hosts the static website files (HTML, CSS, JavaScript).
2. **CodePipeline**: Automates the deployment process:
   - Pulls the latest code from GitHub.
   - Packages the files into an artifact.
3. **S3**: Hosts the static website for public access.

## Additional Configuration

### **Enable Automatic Rollback**
   - If the deployment fails, enable **automatic rollback** to restore the previous working version.

### **Enable Automatic Retries**
   - Enable **automatic retry** on stage failure to ensure the pipeline retries if there are intermittent issues.

## Conclusion

This process automates the deployment of a static website from GitHub to AWS S3 using AWS CodePipeline. Once set up, any change pushed to the GitHub repository will automatically trigger the pipeline, resulting in an updated version of your website being hosted on S3.

## Troubleshooting

If you encounter issues with deployment, ensure the following:
- Your **IAM roles** have the correct permissions for accessing GitHub and S3.
- The **bucket policy** for S3 allows public access to the website files if required.
- **Static website hosting** is enabled in your S3 bucket settings.

---

