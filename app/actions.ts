"use server"

// Fallback to simple logging until KV is set up
type Contribution = {
  id: string
  name: string
  amount: number
  message?: string
  timestamp: string
}

// Submit a new contribution
export async function submitContribution(name: string, amount: number, message?: string) {
  // Validate input
  if (!name.trim() || isNaN(amount) || amount <= 0) {
    throw new Error("Invalid contribution data")
  }

  // Create new contribution
  const newContribution: Contribution = {
    id: crypto.randomUUID(),
    name: name.trim(),
    amount,
    message: message?.trim() || "",
    timestamp: new Date().toISOString(),
  }

  try {
    // For now, just log to console (you can see this in Vercel function logs)
    console.log("New contribution received:", JSON.stringify(newContribution, null, 2))

    // Simulate a small delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return { success: true }
  } catch (error) {
    console.error("Error processing contribution:", error)
    throw new Error("Failed to save contribution. Please try again.")
  }
}

// Placeholder for admin page
export async function getAllContributions(): Promise<Contribution[]> {
  // Return empty array for now
  return []
}
