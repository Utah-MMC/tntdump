# Cursor Surgical Prompt Template

## Default Prompt Template

When making any changes in Cursor, use this template:

```
Make the smallest safe change. Keep existing patterns. Output a unified diff. No refactor.
```

## Why Surgical Prompts?

- **Smallest safe change**: Minimizes risk and makes changes easier to review
- **Keep existing patterns**: Maintains code consistency and team conventions
- **Output unified diff**: Makes it easy to see exactly what changed
- **No refactor**: Prevents unnecessary code restructuring

## Usage Examples

### Good (Surgical):
```
Add error handling to the submit function. Make the smallest safe change. Keep existing patterns. Output a unified diff. No refactor.
```

### Bad (Too Broad):
```
Refactor the entire form component to use hooks
```

## When to Use

- Bug fixes
- Feature additions
- Performance improvements
- Code updates
- Any change where you want minimal, safe modifications

## When NOT to Use

- Large architectural changes (discuss first)
- Complete rewrites (plan separately)
- Breaking changes (coordinate with team)

