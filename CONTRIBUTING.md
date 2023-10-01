# CONTRIBUTION GUIDE

## Branching Strategy

We follow a simplified branching strategy to keep our development organized:

- We have a single main branch (`main`) that serves as the primary development branch.
- For each new feature or bug fix, team members create separate `feature` branches. [Check](#Branch-Naming-Conventions) out these notes on how to name the branches.
- Once a feature is complete and tested, it is `merged` into the main branch.

### How to implement Branching Strategy

To contribute to this project, follow these steps to create new branches and make pull requests:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/hamitsehjal/CampusCart-FRONTEND.git
   ```
2. Create a new branch for your feature or bug fix:
   ```bash
   # Create a new branch and switch to it
   git checkout -b feature/my-feature
   ```
3. Make your code changes, commits, and push your branch to the remote repository
   ```bash
   # Make code changes and commit them
   git add .
   git commit -m "Add your descriptive commit message here"

   # Push your branch to the remote repository
   git push origin feature/my-feature
   ```

4. Create a Pull Request (PR) on GitHub:
  - Go to the GitHub repository.
  - Click on the "Pull Requests" tab.
  - Click the "New Pull Request" button.
  - Choose your branch as the source and the main branch as the target.
  - Add a descriptive title and description for your PR.
  - Click "Create Pull Request"

5. Your PR will be reviewed by team members, and any necessary discussions or changes will be made before merging.


### Branch-Naming-Conventions

- Use Descriptive Names

- **Include a Prefix**
  - `feature/`: For new features or functionality
  - `bugfix/`: For bug fixes
  - `hotfix/`: For critical fixes that need immediate attention
  - `refactor/`: For code refactoring
  - `docs/`: For documentation changes
  - `chore/`: For general maintenance tasks
  - `test/`: For test-related tasks

- **Include issues or User Story Information**
  - Example: `feature/setup-mongodb-123` (for a branch associated with issue #123)

